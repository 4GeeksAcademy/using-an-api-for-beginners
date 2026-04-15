async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/2`);
  const result = await response.json();
  return result.data.item.done;
}

module.exports = solve;
