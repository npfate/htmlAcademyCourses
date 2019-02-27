var numbers = ['3', 4, 5, 9, 2, 5, '2'];
var uniqueNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) {
    uniqueNumbers.push(numbers[i]);
  }
}

// for (var i = 0; i < numbers.length; i++) {
//   var num = numbers[i];
//   var k = 0;
//   for (var j = 0; j < numbers.length; j++) {
//     if (num === numbers[j]) {
//       k++;
//       // console.log('k = ' + k);
//     }
//   }
//   if (k === 1) {
//     uniqueNumbers.push(num);
//   }
// }

console.log(uniqueNumbers);

/* Техническое задание

Напишите программу, которая создаёт массив уникальных значений (тех, что не повторяются), взятых из первого массива.

Исходный массив записан в переменную numbers.

Переберите массив и последовательно добавьте уникальные значения в массив uniqueNumbers. Для добавления новых элементов в массив можете использовать метод
array.push().

*/
