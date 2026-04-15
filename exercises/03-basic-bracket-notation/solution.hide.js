async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.meta["api-version"];
}

module.exports = solve;
