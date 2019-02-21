var numbers = [1, 3, 123, 22, 3, 41, 5, 66, 88];

for (var i = 0; i < numbers.length / 2; i++) {
  var swap = numbers[numbers.length - 1 - i];
  numbers[numbers.length - 1 - i] = numbers[i];
  numbers[i] = swap;
}

// var i = 0;
// var j = numbers.length-1;
// var swap=0;
// while (i < j) {
//   swap = numbers[j];
//   numbers[j] = numbers[i];
//   numbers[i] = swap;
//   i++; 
//   j--;
// }

// var numbersNew = [];

// for (var i = 1; i <= numbers.length; i++) {
//   numbersNew.push(numbers[numbers.length - i]);
// }
// numbers = numbersNew;

// for (var i = 0; i < numbers.length - 1; i++) {
//   var swap = numbers[i];
//   numbers[i] = numbers[numbers.length - 1 - i];
//   numbers[numbers.length - 1 - i] = swap;
// }

// for (i = 0, j = numbers.length -1; i < j; i++, j--) {
//   var temp = numbers[i];
//   numbers[i] = numbers[j];
//   numbers[j] = temp;
// }

// numbers.reverse();

console.log(numbers);

/* Техническое задание

Напишите программу, которая меняет массив так, чтобы его элементы шли в обратном порядке.

Массив записан в переменную numbers.

Обратите внимание, что вам нужно поменять порядок элеменов в массиве numbers. Создавать другую переменную для новой версии массива не нужно.

*/
