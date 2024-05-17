'use strict';
//1
let result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);
//2
let email = "hludovdmitrij25@gmail.com";
console.log(email.includes("@"));
console.log(email.length);

//3
const my = 'My';
const name = 'name';
const is = 'is';
const fullName = `${my} ${name}} ${is} Victor`;
console.log(fullName);

//4
const userName = 'Dmytro';
const payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);