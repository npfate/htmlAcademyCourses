var poly = 124421;
var ylop = [];
var isPalindrome = true;

var polyStr = String(poly);

for (var i = 0; i < polyStr.length; i++) {  
  ylop.push(polyStr[i]);
}

ylop.reverse();

for (var j = 0; j < ylop.length; j++) {
  if (ylop[j] !== polyStr[j]) {
    isPalindrome = false;
  }
}
console.log(ylop);
console.log(isPalindrome);

/* Техническое задание

Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/
