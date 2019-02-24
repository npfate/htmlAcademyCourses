// Функция подсчёта миль

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


// Функция, которая считает количество полётов

var calculateFlights = function (distance, isBusinessClass, milesTarget) {
  // Вызываем одну функцию из другой
  var miles = calculateMiles(distance, isBusinessClass);
  var flights = Math.ceil(milesTarget / miles);
  return flights;
};


// Массив миль, которые нужно накопить

var targets = [1500, 3000, 5000, 7500, 10000, 15000];


// Цикл, в котором выясняется, какими перелётами мили накопятся быстрей

for (var i = 0; i < targets.length; i++) {
  var flightsVariantFirst = calculateFlights(3118, true, targets[i]);
  var flightsVariantSecond = calculateFlights(3617, false, targets[i]);

  console.log('Необходимое количество полётов в бизнес-классе до Валенсии: ' + flightsVariantFirst);
  console.log('Необходимое количество полётов в экономе до Лиссабона: ' + flightsVariantSecond);

  if (flightsVariantFirst > flightsVariantSecond) {
    console.log('Быстрей накопишь полётами в экономе до Лиссабона! Количество полётов: ' + flightsVariantSecond);
  } else {
    console.log('Быстрей накопишь полётами в бизнесе до Валенсии! Количество полётов: ' + flightsVariantFirst);
  }
}
