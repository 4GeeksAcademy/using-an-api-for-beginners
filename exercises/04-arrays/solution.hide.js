async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const result = await response.json();
  return result.data.results[0].stats.scores[2];
}

module.exports = solve;
