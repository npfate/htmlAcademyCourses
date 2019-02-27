var footballer1 = {
  name: 'Ronaldo',
  goals: 1,
  passes: 1
}
var footballer2 = {
  name: 'Rivaldo',
  goals: 4,
  passes: 1
}

var footballPlayers = [footballer1, footballer2];

var getStatistics = function (players) {
  var goalsSum = 0;
  for (var j = 0; j < players.length; j++) {
    goalsSum += players[j].goals;
  }
  console.log(goalsSum);
  for (var i = 0; i < players.length; i++) {
    players[i].coefficient = players[i].goals * 2 + players[i].passes;
    players[i].percent = Math.round(players[i].goals / goalsSum * 100);
  }
  
  return players;
};

getStatistics(footballPlayers);

/* Техническое задание

Мяу! Мне нужна программа, которая подсчитает полезность и результативность игроков на основе их статистики. Оформи код в виде функции getStatistics с одним параметром — массивом игроков.

Каждый футболист в этом массиве описывается объектом с тремя полями: имя (свойство name), забитые голы (свойство goals) и голевые пасы (свойство passes).

Функция должна возвращать этот же массив, в котором каждому игроку добавлены ещё два поля: коэффициент полезности по Кексу® (свойство coefficient) и результативность (свойство percent).

Коэффициент полезности считается так: умножаем голы игрока на 2 (потому что я считаю, что голы важнее всего) и прибавляем к этому значению все голевые пасы футболиста.

Результативность (процент забитых мячей футболиста от результата всей команды) считаем так: находим сумму голов всех игроков и выясняем, сколько процентов от этого числа забил каждый футболист. Округляй значение с помощью Math.round().

*/
