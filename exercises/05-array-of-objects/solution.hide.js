async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const result = await response.json();
  return result.data.results[1].contact.email;
}

module.exports = solve;
