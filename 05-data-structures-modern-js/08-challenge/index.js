const game = {
  team1: "Munich",
  team2: "Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2023",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, "Tiago", "Coutino", "Perisic"];
console.log(players1Final);

const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw);

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski");
printGoals("Kimmich", "Muller");
printGoals(game.scored);

team1 < team2 && console.log("Team1 is more likely to win");
team2 < team1 && console.log("Team2 is more likely to win");
