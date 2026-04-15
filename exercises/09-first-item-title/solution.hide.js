async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`);
  const result = await response.json();
  return result.data.item.title;
}

module.exports = solve;
