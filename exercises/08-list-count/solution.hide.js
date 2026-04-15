async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items`);
  const result = await response.json();
  return result.data.count;
}

module.exports = solve;
