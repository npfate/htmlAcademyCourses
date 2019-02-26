var diceNumber = 2;

var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var cats = [firstCat, secondCat];

var runGame = function (quantity, players) {
  for (var i = 0; i < players.length; i++) {
    var throwResult = keks.throwDice(quantity, quantity * 6);
    players[i].points += throwResult;
    console.log(players[i].name + ' выбросил ' + players[i].points);
  }
  return players;
};

cats = runGame(diceNumber, cats);
console.log(cats);
