var numbers = [1, 3, 123, 22, 3, 41, 5, 66];

for (var i = 0; i < numbers.length - 1; i++) {
  var swap = numbers[i];
  numbers[i] = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = swap;
}

// numbers.reverse();

console.log(numbers);

/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/
