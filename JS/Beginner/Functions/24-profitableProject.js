var getPrice = function (time, isUrgent) {
  var hourRate = 1500;
    
  if (isUrgent) {
    time /= 2;
    hourRate *= 2.5;
  }
  
  if (time > 150) {
    hourRate -= 250;
  }
  
  var price = hourRate * time;  
  return price;
}

var getProfitableProject = function (time, profit) {
  var urgentProject = getPrice(time, true) - profit;
  var normalProject = getPrice(time, false);
  var profitableProject = "";
  
  var urgentProjectLog = "Выгодней срочный проект. Потратишь на него " + urgentProject;
  var normalProjectLog = "Выгодней обычный проект. Потратишь на него " + normalProject;
  
  if (urgentProject < normalProject) {
    profitableProject += urgentProjectLog;  
  } else {
    profitableProject += normalProjectLog;  
  }
  
  return profitableProject;
};

console.log(getProfitableProject(200, 50000));
console.log(getPrice(200, true));

/* Техническое задание

Мяу! Напиши программу getProfitableProject, которая определяет, какой проект выгодней: срочный или обычный.

Функция принимает на вход два параметра:

- время на проект в часах;
- прибыль, которую принесёт сайт, если будет сделан в срочном режиме.

Названия параметров могут быть любыми.

Внутри функции надо сравнить два проекта: срочный и обычный.

Обрати внимание, что срочный проект принесёт прибыль за то время, пока готовился бы обычный проект. Поэтому прибыль от срочного проекта нужно вычесть из его стоимости.

Функция getProfitableProject должна возвращать строку:


- 'Выгодней срочный проект. Потратишь на него ' + расходы — если срочный проект окажется дешевле обычного.
- 'Выгодней обычный проект. Потратишь на него ' + расходы — если обычный проект дешевле.

*/
