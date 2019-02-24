var calculateMiles = function (distance, isBusinessClass) {
  if (isBusinessClass) {
    return distance * 0.22;
  } else {
    return distance * 0.18;
  }
};

console.log(calculateMiles(10000, true));
