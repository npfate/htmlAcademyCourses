var books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
var minNumber = 3;
var maxNumber = 5;
var filteredBooks = [];

for (i = 0; i < books.length; i++) {
  if (books[i].length >= minNumber && books[i].length <= maxNumber) {
    filteredBooks.push(books[i]);
  }
}
console.log(filteredBooks);

/* Техническое задание

Мяу! Напиши программу, которая на основе одного массива с книгами создаст другой.

Массив книг записан в переменную books.

В переменную minNumber записано минимальное количество букв в названии книги (включительно), а в переменную maxNumber записано максимальное число букв (включительно). Чтобы найти количество букв в названии, используй команду строка.length.

Собери новый массив на основе изначального, добавляя элементы последовательно (от меньшего индекса к большему).

Результат запиши в переменную filteredBooks.

Для добавления элементов в новый массив используй команду array.push().

*/
