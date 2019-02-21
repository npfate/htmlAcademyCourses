var indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
var levels = [8, 15, 9, 12, 11];
var trainingTime = 30;

if (trainingTime <= 30) {
  levels[indicators.indexOf('скорость')] += 3;
  levels[indicators.indexOf('ловкость')] += 3;
} else if (trainingTime > 30 && trainingTime <= 60) {
  levels[indicators.indexOf('гибкость')] += 3;
} else {
  levels[indicators.indexOf('сила')] += 2;
  levels[indicators.indexOf('выносливость')] += 2;
} 
  
console.log(levels);


// var strength = indicators.indexOf('сила');
// var flexibility = indicators.indexOf('гибкость');
// var endurance = indicators.indexOf('выносливость');
// var speed = indicators.indexOf('скорость');
// var dexterity = indicators.indexOf('ловкость');

// if (trainingTime <= 30) {
//   levels[speed] += 3;
//   levels[dexterity] += 3;
// } else if (trainingTime > 30 && trainingTime <= 60) {
//   levels[flexibility] += 3;
// } else {
//   levels[strength] += 2;
//   levels[endurance] += 2;
// } 
  
// console.log(levels);


/* Техническое задание

Напиши программу, которая будет следить за моими спортивными показателями.

В переменную indicators записан массив с моими спортивными характеристиками.

В массив levels записаны уровни каждого показателя. Каждый элемент этого массива соответствует по индексу элементу массива indicators.

В зависимости от времени тренировки, прокачиваются разные показатели. Время тренировки указано в минутах и записано в переменную trainingTime.

Если тренировка длится до 30 минут включительно, увеличивай скорость и ловкость на 3.

Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.

Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.

Напиши универсальное решение, которое будет корректно работать независимо от того, в какой последовательности указаны показатели и их характеристики в массивах.
*/
