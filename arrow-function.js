//function declare

function add(num1, num2) {
    return num1 + num2;
}

// document.getElementById('my-btn').onclick = function handleEvent(){

// }

const add2 = function add2(num1, num2) {
    return num1 + num2;
}
const add3 = (num1, num2) => num1 + num2;


const sum1 = add(15, 17);
const sum2 = add2(15, 17);
const sum3 = add3(15, 17);
console.log(sum1, sum2, sum3);