var gameRules = {
  diceNumber: 2,
  maxAttempts: 3
};

var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var cats = [firstCat, secondCat];
// console.log(cats);

var runGame = function (rules, players) {
  for (var currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++) {
    for (var i = 0; i < players.length; i++) {
      var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
      players[i].points += throwResult;
      console.log(players[i].name + ' выбросил ' + players[i].points);
    }
  }  
  return players;
};

cats = runGame(gameRules, cats);
// console.log(cats);
