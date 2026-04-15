async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const data = await response.json();
  return data.data.results[0].stats.scores[2];
}

module.exports = solve;
