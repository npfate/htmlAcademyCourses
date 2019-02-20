var numbers = [2, 0, 7, 4, 0, 2];
var number = 0;
var lastIndex = -1;
// var lastIndex = numbers.lastIndexOf(number);

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] === number) {
    lastIndex = i;
  } 
}

console.log(lastIndex);

/* Техническое задание

Напишите программу, которая будет находить последний индекс элемента в массиве.

Массив записан в переменную numbers.

Элемент, последний индекс которого надо найти, записан в переменную number.

Создайте переменную lastIndex и записывайте в неё последний индекс числа number. Если числа number в массиве нет, переменная lastIndex должна быть равна -1.

*/
