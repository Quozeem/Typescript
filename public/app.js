"use strict";
const ademola = 'sulamion';
console.log(ademola);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(inputs);
});
let character = "Olumide";
let age = 20;
let isBlack = false;
character = "shola";
const circle = (diameters) => {
    // console.log (diameters * Math.PI);
    return diameters * Math.PI;
};
console.log(circle(3));
//circle(34);
//console.log(circ('hello')); 
const add = (see) => {
    return see + 1;
};
console.log(add('1'));
//array
let names = ['afe', 'tit', 'ola'];
names.push('po');
let mixed = ['ademola', 9, 'oloa', false];
mixed.push(8);
//object
let adam;
adam = {
    name: 'ademola',
    adem: ['admola', 'lolade'],
    uest: false,
    age: 9
};
console.log(adam);
let greet = (b) => {
    console.log(b);
};
greet("walew");
//or
let greets;
greets = () => {
    console.log("hello wolrd");
};
const math = (a, b, c) => {
    console.log(a * b);
};
math(2, 8);
const agurment = (ui, items) => {
    console.log(ui + items);
};
agurment(6, 'love');
const anoterargu = (user) => {
    console.log(user.name + user.ui);
};
//anoterargu('ss',)
let houes;
houes = (name, greeting) => {
    console.log('${name} says ${greeting}');
};
