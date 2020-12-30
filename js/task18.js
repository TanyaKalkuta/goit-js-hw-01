function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
const totalPrice=pricePerDroid*orderedQuantity;
const remainder=  customerCredits-totalPrice;
  if (totalPrice>customerCredits) {
  message = `Недостаточно средств на счету!`}
  else {
  message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${remainder} кредитов`}
  // Пиши код выше этой строки
  return message;
}

console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(500, 10, 5000));