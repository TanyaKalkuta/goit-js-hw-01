
const total = 100;
let ordered = 50;
let result;

console.log(total, ordered);
if (total > ordered) {
    result="Заказ оформлен, с вами свяжется менеджер"
} else { 
    result="На складе недостаточно твоаров!"
}

console.log(result);

/* 
alert(total);

const isComing = confirm('Please confirm hotel reservation');
console.log(isComing);

const hotelName = prompt('Please enter desired hotel name:');
console.log(hotelName);

const value = prompt('Please enter a number!');
console.log(typeof value); // 'string'
console.log(value); // '5' */