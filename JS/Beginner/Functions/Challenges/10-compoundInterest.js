var calculateDeposit = function (initDeposit, annualPercent, term, isCapitalize) {
  annualPercent /= 100
  var result = initDeposit;
    
  if (isCapitalize) {
    for (i = 0; i < term; i++) {
      var cap = initDeposit + (annualPercent / 12) * initDeposit;
      initDeposit = cap;
    }
    result = cap;
  } else {
    result = initDeposit + initDeposit * annualPercent / 12 * term;  
  }
  
  return Math.floor(result);
};

calculateDeposit(100000, 10, 2, true);

/* Техническое задание

Мяу! Мне нужно посчитать, сколько я заработаю денег на вкладах с разными условиями. Оформи программу, как функцию calculateDeposit с четырьмя параметрами:

1. начальная сумма депозита;
2. процент годовых (число от 0 до 100);
3. срок вклада в месяцах;
4. с капитализацией процентов или нет (флаг с булевым значением).

Функция должна возвращать итоговую сумму депозита, округлённую до рублей с помощью Math.floor(). Название параметров используй любые.

Если вклад простой, то процент годовых делится на 12 и умножается на срок вклада, а затем начальная сумма увеличивается на посчитанный процент.

Вклад с капитализацией считается сложнее: каждый месяц к сумме депозита прибавляются накопленный за месяц процент годовых (не забывай делить процент на 12), а процент следующего месяца считается уже от увеличенной суммы депозита.

*/
