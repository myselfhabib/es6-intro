const numbers = [23, 14, 29, 30, 99];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 34, 56, 99);
const maxInArray = Math.max(...numbers);

// console.log(max, maxInArray);

const numbers2 = [...numbers, 88];

numbers.push(90);
console.log(numbers);
console.log(numbers2);



