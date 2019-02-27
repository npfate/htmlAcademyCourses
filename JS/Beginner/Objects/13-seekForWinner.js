// Правила
var gameRules = {
  diceNumber: 2, // количество костей
  maxAttempts: 3 // количество бросков
};

// Участники
var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

// Массив участников
var cats = [firstCat, secondCat];

// Функция начисления очков участникам
var runGame = function (rules, players) {
  for (var currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++) { // перебор количества бросков
    for (var i = 0; i < players.length; i++) { // перебор всех игроков, бросающих кубики
      var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6); // результат броска участника i
      players[i].points += throwResult; // добавление результата броска к очкам участника
      console.log(players[i].name + ' выбросил ' + players[i].points);
    }
  }
  return players;
};

// Функция определения победителей
var getWinners = function (players) {
  var winners = [];

  for (var i = 0; i < players.length; i++) { // перебор всех игроков с целью выявить победителя
    var currentPlayer = players[i]; // назначаем победителя — игрок i
    console.log(currentPlayer);
  }

  return winners; // возвращаем из функции массив с победителями
};

cats = runGame(gameRules, cats); // вызываем функцию начисления очков участникам
console.log(cats);
var tops = getWinners(cats); // вызываем функцию определения победителей
console.log(tops);
