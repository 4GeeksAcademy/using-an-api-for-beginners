async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.data.results[1].contact.email;
}

module.exports = solve;
