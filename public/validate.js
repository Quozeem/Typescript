const link = document.querySelector('a');
if (link) {
    console.log(link.href);
}
const formclass = document.querySelector('.new-item-form');
//console.log(formclass.children);
//INPUTS
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//  const type=document.querySelector('#type')!
formclass.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
//class
class Person {
    constructor(name) {
        this.name = name;
        this.name = name;
        console.log(this.name + " Salam");
    }
    graetperson() {
        console.log("Hello " + this.name);
    }
    static staticMethod() {
        console.log('Hey ');
    }
}
let p = new Person("Ademola");
p.graetperson();
Person.staticMethod();
class Parent {
    constructor(name) {
        this.name = name;
        console.log(name + " Typescripting");
    }
    GetId() {
        return "40";
    }
}
class Child extends Parent {
    constructor(name) {
        super(name);
        this.name = name;
        console.log(name + " Javascript");
    }
    GetId() {
        return super.GetId();
    }
}
let a = new Child("validate");
console.log(a.GetId());
import { Invoice } from './classes/invoice';
const invoiceone = new Invoice("Ademola", "UBA", 340);
const invoicetwo = new Invoice("lolade", "UBA", 550);
//console.log(invoiceone,invoicetwo)
let invoics = [];
invoics.push(invoiceone);
invoics.push(invoicetwo);
invoics.forEach(x => {
    // x.amount=34;
    console.log(x.name, x.details, x.amount, x.format());
});
