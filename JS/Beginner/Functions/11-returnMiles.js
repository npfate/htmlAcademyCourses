var calculateMiles = function (distance, isBusinessClass) {
  if (isBusinessClass) {
    return distance * 0.22;
  } else {
    return distance * 0.18;
  }
};

var milesEconom = calculateMiles(3000, false);
var milesBusiness = calculateMiles(3000, true);

console.log('Эконом-классом Кексофлота накопишь ' + milesEconom + ' миль');
console.log('Бизнес-классом Кексофлота накопишь ' + milesBusiness + ' миль');
