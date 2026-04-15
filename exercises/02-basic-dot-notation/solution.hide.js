async function solve(baseUrl) {
  const response = await fetch(`${baseUrl}/overview`);
  const result = await response.json();
  return result.user.profile.name;
}

module.exports = solve;
