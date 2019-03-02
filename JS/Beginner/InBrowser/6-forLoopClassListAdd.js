var catalogData = [
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  },
  {
    isAvailable: true,
    isSpecial: true
  },
  {
    isAvailable: true,
    isSpecial: false
  },
  {
    isAvailable: false,
    isSpecial: false
  }
];

var updateCards = function (products) {
  var elements = document.querySelectorAll('.product');
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    console.log(element);
    var product = products[i];
    console.log(product);
    var availabilityClass = 'product--available';
    if (!product.isAvailable) {
      availabilityClass = 'product--unavailable';
    }
    element.classList.add(availabilityClass);
  }
};

updateCards(catalogData);
