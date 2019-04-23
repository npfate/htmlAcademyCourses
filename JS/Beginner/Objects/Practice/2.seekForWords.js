var data = ['сова', 'щенок', 'сова', 'лиса', 'велосипед', 'сова', 'лиса', 'комод'];

var getRepeats = function(array) {
  var taskObject = {};
  
  for (var i = 0; i < array.length; i++) {
    if (!taskObject[array[i]]) {
      taskObject[array[i]] = 1;
    }
    else {
      taskObject[array[i]]++;
    }
    console.log(taskObject);
  }
  
  return taskObject;
};

getRepeats(data);

/*

В этой задаче вам нужно проанализировать данные — вычислить повторы каждого слова.

Создайте функцию getRepeats с одним параметром. В этот параметр будет приходить массив данных.

Функция должна возвращать объект, в котором указано сколько раз каждое слово встречается в массиве.


*/
