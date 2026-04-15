const assert = require("assert");
const http = require("http");
const https = require("https");
const { createApp } = require("../../api/server");

function createFetchPolyfill() {
  return function fetchPolyfill(resource, options = {}) {
    const target = new URL(resource);
    const client = target.protocol === "https:" ? https : http;
    const method = options.method || "GET";
    const headers = options.headers || {};
    const body = options.body;

    return new Promise((resolve, reject) => {
      const request = client.request(
        {
          protocol: target.protocol,
          hostname: target.hostname,
          port: target.port,
          path: `${target.pathname}${target.search}`,
          method,
          headers
        },
        (response) => {
          let raw = "";

          response.setEncoding("utf8");
          response.on("data", (chunk) => {
            raw += chunk;
          });
          response.on("end", () => {
            resolve({
              ok: response.statusCode >= 200 && response.statusCode < 300,
              status: response.statusCode,
              headers: response.headers,
              text: async () => raw,
              json: async () => JSON.parse(raw)
            });
          });
        }
      );

      request.on("error", reject);

      if (body) {
        request.write(body);
      }

      request.end();
    });
  };
}

function installTrackedFetch(requestLog) {
  const previousFetch = global.fetch;
  const baseFetch =
    typeof previousFetch === "function" ? previousFetch.bind(global) : createFetchPolyfill();

  global.fetch = async function trackedFetch(resource, options = {}) {
    const target = new URL(resource);
    const method = (options.method || "GET").toUpperCase();

    requestLog.push({
      url: target.toString(),
      path: target.pathname,
      search: target.search,
      method
    });

    return baseFetch(resource, options);
  };

  return () => {
    if (typeof previousFetch === "function") {
      global.fetch = previousFetch;
      return;
    }

    delete global.fetch;
  };
}

async function startExerciseApi() {
  const app = createApp();
  const server = app.createServer();

  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  const baseUrl = `http://127.0.0.1:${address.port}`;

  return {
    baseUrl,
    close: () =>
      new Promise((resolve, reject) =>
        server.close((error) => (error ? reject(error) : resolve()))
      )
  };
}

async function runExercise({ solve, validate, negativeCheck }) {
  assert.strictEqual(typeof solve, "function", "app.js must export a function named solve");

  const context = await startExerciseApi();
  const requestLog = [];
  const restoreFetch = installTrackedFetch(requestLog);

  try {
    const result = await solve(context.baseUrl);
    await validate(result, context.baseUrl, requestLog);
    if (negativeCheck) {
      await negativeCheck(result, context.baseUrl, requestLog);
    }
  } finally {
    restoreFetch();
    await context.close();
  }
}

function assertRequestMade(requestLog, { method, path, message }) {
  const normalizedMethod = method.toUpperCase();
  const found = requestLog.some(
    (entry) => entry.method === normalizedMethod && entry.path === path
  );

  if (!found) {
    assert.fail(
      message ||
        `Expected a ${normalizedMethod} request to ${path}, but captured requests were ${JSON.stringify(
          requestLog
        )}.`
    );
  }
}

function assertRequestSequence(requestLog, sequence, message) {
  let cursor = 0;

  for (const expected of sequence) {
    while (
      cursor < requestLog.length &&
      !(
        requestLog[cursor].method === expected.method.toUpperCase() &&
        requestLog[cursor].path === expected.path
      )
    ) {
      cursor += 1;
    }

    if (cursor === requestLog.length) {
      assert.fail(
        message ||
          `Expected request sequence ${JSON.stringify(sequence)}, but captured requests were ${JSON.stringify(
            requestLog
          )}.`
      );
    }

    cursor += 1;
  }
}

module.exports = {
  runExercise,
  assertRequestMade,
  assertRequestSequence
};
