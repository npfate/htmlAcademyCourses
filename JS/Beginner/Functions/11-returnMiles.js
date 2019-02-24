var calculateMiles = function (distance, isBusinessClass) {
  var percent = 0.18;
  if (isBusinessClass) {
    percent += 0.04;
  }
  if (distance > 3500) {
    percent += 0.15;
  }
  return distance * percent;
};

var milesEconom = calculateMiles(10000, false);
var milesBusiness = calculateMiles(10000, true);

console.log('Эконом-классом Кексфолота накопишь ' + milesEconom + ' миль');
console.log('Бизнес-классом Кексфолота накопишь ' + milesBusiness + ' миль');
