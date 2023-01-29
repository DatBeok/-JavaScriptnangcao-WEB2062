// Coding Challenge 1
const game = {
    team1: 'Lakers',
    team2: 'Golden States Warrior',
    players:
        [
            [
                'Lebron James',
                'Thomas Bryant',
                'Russel Westbrook',
                'Rui Hachimura',
                'Anthony Davis',
            ],
            [
                'Stephen Curry',
                'Jordan Poole',
                'Klay Thompson',
                'Draymon Green',
                'Andrew Wiggins',
            ],
        ],
    score: '45:44',
    scored: ['Lebron james', 'Anthony Davis', 'Klay Thompson', 'Stephen Curry'],
    date: 'Nov 9th, 2025',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);

// 2.
const [sg, ...shootingPlayers] = players1;
console.log(sg, shootingPlayers);

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4. 
const playersFinal = [...players1, 'Camelo Anthony', 'Kyle Kuzma'];
console.log(playersFinal);

// 5.
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

// 6. 
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};

// printGoals('Curry','Lebron','Davis','Thompsons');
// printGoals('Curry','Lebron');
printGoals(...game.scored);

// 7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');