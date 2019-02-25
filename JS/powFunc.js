function computePower(num, exponent) {
  var result = 1;
  for (i = 0; i < exponent; i++) {
    result *= num;
  }
  return result;
} 
