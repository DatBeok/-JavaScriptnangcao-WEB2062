// Coding Challenge 2
const game = {
  team1: "LA Lakers",
  team2: "Golden States Warriors",
  players: [
    [
      "Lebron James",
      "Thomas Bryant",
      "Russel Westbrook",
      "Rui Hachimura",
      "Anthony Davis",
    ],
    [
      "Stephen Curry",
      "Jordan Poole",
      "Klay Thompson",
      "Draymon Green",
      "Andrew Wiggins",
    ],
  ],
  score: "45:44",
  scored: ["Lebron James", "Anthony Davis", "Klay Thompson", "Stephen Curry"],
  date: "Nov 9th, 2025",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of Object.values(game.odds)) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
