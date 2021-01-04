function checkForName(fullName, name) {
 const result = fullName.includes(name); // Дополни эту строку
  return result;
}
console.log(checkForName('Егор Колбасов', 'Егор'));
console.log(checkForName('Егор Колбасов', 'егор'));
console.log(checkForName('Егор Колбасов', 'егОр'));
console.log(checkForName('Вадим Некрасов', 'Вадим'));
