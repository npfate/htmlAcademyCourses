var groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
var shoppingList = '';

// for (var i = 0; i < groceries.length; i++) {
//   if (i >= 1) {
//     shoppingList += ', ';  
//   }
//   shoppingList += groceries[i];
// }

shoppingList = groceries.join(', ');

console.log(shoppingList);
