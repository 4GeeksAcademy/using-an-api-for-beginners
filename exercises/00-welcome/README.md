# `00` Welcome

Welcome to this LearnPack about using an API with beginner-friendly `GET` requests.

In the next exercises you will practice how to:

- inspect JSON responses from real endpoints,
- read nested properties and arrays,
- move between collection endpoints and detail endpoints,
- and decide what your `solve(baseUrl)` function should return based on the data you receive.

## How to work through this tutorial

Most exercises will only give you:

- the endpoint you need to call,
- and the expected final result.

Your job is to inspect the response and figure out which value your function should produce.

## Recommended workflow

1. Open the exercise statement.
2. Use a tool like Postman, Thunder Client, or your browser dev tools to inspect the endpoint response.
3. Complete the existing `solve(baseUrl)` function in `app.js`.
4. Run the test and use the feedback to iterate.

## Important note about `baseUrl`

Do not hardcode `http://localhost:3001`.

Each test passes a `baseUrl` argument to your function, and your requests should use that value:

```js
fetch(`${baseUrl}/overview`)
```

That makes your solution work both locally and inside LearnPack/Codespaces.
