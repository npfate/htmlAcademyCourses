var materialPrice = {
  'wood': 1000,
  'stone': 1500,
  'brick': 2000
};

var house = {
  rooms: 5,
  floors: 3,
  material: 'wood',
  coefficient: 9,
  calculateSquare: function() {
    let houseSquare = this.rooms * this.coefficient * this.floors;
    return houseSquare;
  },
  calculatePrice: function() {
    let priceOverall = this.calculateSquare() * materialPrice[this.material];
    return priceOverall;
  }
};


/* Техническое задание

Мяу! Допиши за меня конфигуратор. Я создал объект house и задал ему несколько свойств: rooms (количество комнат), floors (этажи), material (материал для стен), coefficient (средняя площадь каждой комнаты).

Ещё я завёл мапу materialPrice, в которой записал стоимость каждого возможного материала для строительства.

Добавь в объект два метода: calculateSquare, который будет возвращать площадь дома, и calculatePrice, который будет возвращать стоимость строительства.

Площадь считай так: умножь количество комнат на коэффициент и число этажей в доме.

Цена строительства — произведение площади и стоимости материала дома.

*/
