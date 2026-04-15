async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.message;
}

module.exports = solve;
