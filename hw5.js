var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "миття голови": "100 грн"
};

services['сушка'] = "200 грн";
services['зачіска'] = "270 грн";
services['фарбування'] = "500 грн";

services.price = function() {
  let totalPrice = 0;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      totalPrice += parseInt(this[key]);
    }
  }
  return totalPrice;
};

services.minPrice = function() {
  let min = null;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      let price = parseInt(this[key]);
      if (min === null || price < min) {
        min = price;
      }
    }
  }
  return min;
};

services.maxPrice = function() {
  let max = null;
  for (let key in this) {
    if (typeof this[key] === 'string') {
      let price = parseInt(this[key]);
      if (max === null || price > max) {
        max = price;
      }
    }
  }
  return max;
};

console.log("Загальная вартісь послуг: " + services.price() + " грн");
console.log("Мінімальна ціна послуги: " + services.minPrice() + " грн");
console.log("Максимальна ціна послуги: " + services.maxPrice() + " грн");
