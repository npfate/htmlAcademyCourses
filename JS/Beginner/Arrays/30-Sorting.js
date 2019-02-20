var qualificationDistance = 200;
var attempts = [120, 150, 160, 201, 203, 180, 202];
var qualified = false;
var averageBest = 0;
var jumpsToQualify = 3;

//Сортировка по убыванию

for (var i = 0; i < attempts.length - 1; i++) {
  var maxValue = attempts[i];
  
  for (var j = i + 1; j < attempts.length; j++) {
    if (attempts[j] > maxValue) {
      maxValue = attempts[j];
      var swap = attempts[i];
      attempts[i] = maxValue;
      attempts[j] = swap;
    }  
  }
}

for (var i = 0; i < jumpsToQualify; i++) {
  averageBest += attempts[i];
}


//Сортировка по возрастанию

// for (var i = 0; i < attempts.length - 1; i++) {
//   var minValue = attempts[i];
  
//   for (var j = i + 1; j < attempts.length; j++) {
//     if (attempts[j] < minValue) {
//       minValue = attempts[j];
//       var swap = attempts[i];
//       attempts[i] = minValue;
//       attempts[j] = swap;
//     } 
//   }
// }

// for (var i = attempts.length - jumpsToQualify; i < attempts.length; i++) {
//   averageBest += attempts[i];
// }


averageBest /= jumpsToQualify;

qualified = averageBest > qualificationDistance

console.log(attempts);
console.log(averageBest);
console.log(qualified);
