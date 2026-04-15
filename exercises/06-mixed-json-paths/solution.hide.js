async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const result = await response.json();
  return result.data.orders[0].customer["full name"];
}

module.exports = solve;
