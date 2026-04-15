async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/items/2`);
  const data = await response.json();
  return data.data.item.profile["full name"];
}

module.exports = solve;
