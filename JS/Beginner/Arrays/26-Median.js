var usersByDay = [1, 2, 3, 4, 5, 6];
console.log(usersByDay);

if (usersByDay.length % 2 !== 0) {
  var medianIndex = (usersByDay.length - 1) / 2;
  var median = usersByDay[medianIndex];
  console.log(median);
} else {
  var leftIndex = usersByDay.length / 2 - 1;
  var rightIndex = usersByDay.length / 2;
  var median = (usersByDay[leftIndex] + usersByDay[rightIndex]) / 2
  console.log(median);
}
