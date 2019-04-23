var getSortedArray = function(arrayToSort, key) {
  
  for (i = 0; i < arrayToSort.length - 1; i++) {
    
    for (j = i + 1; j < arrayToSort.length; j++) {      
      if (arrayToSort[i][key] > arrayToSort[j][key]) {        
        var swap = arrayToSort[i];
        arrayToSort[i] = arrayToSort[j];
        arrayToSort[j] = swap;
      }
    }
    
  }
  
  return arrayToSort;
}

/*
// Массив, который надо отсортировать
// Сортировать будем по значению в ключе age

[
  {
    name: 'Петя',
    age: 5
  },
  {
    name: 'Лёля',
    age: 2
  },
  {
    name: 'Сима',
    age: 3
  }
];

// Отсортированный массив
[
  {
    name: 'Лёля',
    age: 2
  },
  {
    name: 'Сима',
    age: 3
  },
  {
    name: 'Петя',
    age: 5
  }
];
*/

/*

Создайте функцию getSortedArray. У неё должно быть два параметра. Первый — массив, который нужно отсортировать. Второй — имя ключа в объектах. Именно по значению этого ключа нужно будет делать сортировку.

Функция должна возвращать отсортированный массив объектов.

Значения в массиве должны увеличиваться от меньшего к большему.

*/
