async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.data.orders[0].customer["full name"];
}

module.exports = solve;
