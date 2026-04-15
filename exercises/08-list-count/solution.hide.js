async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items`);
  const data = await response.json();
  return data.data.count;
}

module.exports = solve;
