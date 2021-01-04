function checkStorage(available, ordered) {
  let message;

/* if (ordered > available) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  } */
    
      
message=ordered > available? 'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
  
    return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(200, 20));