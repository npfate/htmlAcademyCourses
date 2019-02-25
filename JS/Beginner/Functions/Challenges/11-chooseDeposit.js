var calculateDeposit = function (initDep, annualPercent, term, isCap) {
  annualPercent /= 100;
  var result = initDep;
  if (isCap) {
    for (var i = 0; i < term; i++) {
      var cap = initDep + (annualPercent / 12) * initDep;
      initDep = cap;
    }
    result = cap;
  } else {
    result = initDep + initDep * annualPercent / 12 * term;  
  }
  return Math.floor(result);
}

var getProfitableDeposit = function (initDep, term, simpleInterest, compoundInterest) {  
  var simpleDep = calculateDeposit(initDep, simpleInterest, term, false);
  var compoundDep = calculateDeposit(initDep, compoundInterest, term, true);
  
  if (simpleDep > compoundDep) {
    var message = 'Выбирай обычный вклад. Заработаешь ' + simpleDep;
  } else {
    var message = 'Выбирай капитализацию. Заработаешь ' + compoundDep;
  }
  
  return message;
}

getProfitableDeposit(100000, 3, 9, 8);

/* Техническое задание

Мяу! Мне нужна программа <code>getProfitableDeposit</code> для сравнения вкладов. У неё должно быть четыре параметра:

исходный размер депозита;
срок депозита в месяцах;
процентная ставка для депозита с простыми процентами;
процентная ставка для депозита с капитализацией процентов.

Программа должна рассчитать, сколько я заработаю с двух разных вкладов: с обычными процентами и с капитализацией. Затем программа должна сравнить результаты и вернуть подходящую строку:

'Выбирай обычный вклад. Заработаешь ' + доход от вклада.
'Выбирай капитализацию. Заработаешь ' + доход от вклада.

*/
