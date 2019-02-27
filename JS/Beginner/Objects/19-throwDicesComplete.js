// Правила
var gameRules = {
  diceNumber: 2, // количество костей
  maxAttempts: 5 // количество бросков
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

var thirdCat = {
  name: 'Рокки',
  points: 0
};

// Массив участников
var cats = [firstCat, secondCat, thirdCat];

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
  var max = players[0]; // по умолчанию, считаем, что первый игрок — победитель

  for (var i = 0; i < players.length; i++) { // перебор всех игроков с целью выявить победителя
    var currentPlayer = players[i]; // назначаем текущего игрока — игроком i, его будем сравнивать с остальными
    
    if (currentPlayer.points > max.points) { // если у текущего игрока (i-того) очков больше, чем у победителя (max) 
      max = currentPlayer; // то переопределяем победителя
      winners = [max]; // и записываем его в пустой массив
    } else if (currentPlayer.points === max.points) { // проверяем, есть ли игроки среди победителей с одинаковым количеством очков
      winners.push(currentPlayer); // добавляем в массив winners таких игроков, то есть будет больше одного победителя
    }
  }
  return winners; // возвращаем из функции массив с победителями
};

// Функция вывода победителей на экран
var printWinners = function (players, winners) {
  if (players.length === winners.length) { // проверяем, может все участники набрали одинаковое количество очков?
    console.log('Все коты как на подбор!');
    return;
  }
  var message = 'Победил ';

  if (winners.length > 1) { // если победителей больше одного (набрали одинаковое количество очков)
    message = 'Победили ';
  }
  for (var i = 0; i < winners.length; i++) { // перебираем всех победителей
    if (i >= 1) {
      message += ', '; // добавляем запятую, чтобы отделить нескольких победителей (сработает только если победителей >= 1)
    }
    message += winners[i].name; 
  }

  message += ' с количеством очков: ' + winners[0].points;

  console.log(message);
};

cats = runGame(gameRules, cats); // вызываем функцию начисления очков участникам
var tops = getWinners(cats); // вызываем функцию определения победителей
printWinners(cats, tops); // вызываем функцию вывода победителей на экран
