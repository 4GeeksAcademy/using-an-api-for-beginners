async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const result = await response.json();
  return result.meta["api-version"];
}

module.exports = solve;
