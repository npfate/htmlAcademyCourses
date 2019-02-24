var numbers = [3, 5, 15, 6, 2, 1];

for (var i = 0; i < numbers.length - 1; i++) { 
  var minValue = numbers[i];
  for (var j = i + 1; j < numbers.length; j++) {
    var swap = numbers[i];
    if (numbers[i] > numbers[j]) {
      minValue = numbers[j];
      numbers[i] = minValue;
      numbers[j] = swap;
    }   
  } 
}

console.log(numbers);

/* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

*/
