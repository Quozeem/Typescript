const ademola= 'sulamion';
 console.log(ademola);

 const inputs=document.querySelectorAll('input');
 console.log(inputs);
 inputs.forEach(input => {
    console.log(inputs)
});
let character= "Olumide";
let age= 20;
let isBlack=false;

character="shola";
const circle= (diameters : number) => {
  // console.log (diameters * Math.PI);
  return diameters * Math.PI;
}
console.log (circle(3));
//circle(34);

//console.log(circ('hello')); 
const add=(see:string)=>{
    return see+1;
}
console.log(add('1'));
//array

let names=['afe','tit','ola'];
names.push('po');
 let mixed=['ademola',9,'oloa',false];
mixed.push(8);

//object
let adam:{
   name:string,
    age:number,
    uest:boolean,
   adem:string[]
}
adam={
    name:'ademola',
    adem:['admola','lolade'],
    uest:false,
    age:9
}
 console.log(adam);
 
 let greet=(b:string)=>{
     console.log(b);
 }
 greet("walew");
 //or
 let greets:Function;
 greets=()=>{
     console.log("hello wolrd")
 }
 const math=(a:number,b:number,c?:string | number)=>{
     console.log(a*b);
 }
 math(2,8);
 type stringornum=string | number;
 type objec={ name:string ,ui: stringornum};
 const agurment=(ui:stringornum, items:string)=>{
     console.log(ui+items);
 }
 agurment(6,'love');
const anoterargu=(user:objec)=>{
    console.log(user.name+user.ui);
}
//anoterargu('ss',)
let houes:(a:string,b:string)=>void;
houes=(name:string,greeting:string)=>{
    console.log('${name} says ${greeting}')
}
 