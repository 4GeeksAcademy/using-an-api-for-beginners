async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/1`);
  const data = await response.json();
  return data.data.item.title;
}

module.exports = solve;
