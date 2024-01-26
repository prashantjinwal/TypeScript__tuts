// @ts-ignore
let myFavNum:number = 55;    // <-- Example of type annotation .
let myfavNum2 = 54;          // <-- without type annotation

let Num:number = 10;
// Num = "harsh"   cannot do that 
console.log(Num.toString());   // we can do that   

// === number type ===
let myNum:number = 5;
let myAge:number = 29;
let pi:number = 3.14;
let nigaVal:number = -5;

// Q---
// let invalidResult:number = myAge + 'years' ;       // not valid in Ts

//let invalidVal:number = "123";         // not valid in ts  

let compVal:number = Math.sqrt(16);     // valid in ts

let nanVal:number = NaN ;    // valid in ts


// === string type ===

let myFullName:string = "prashant";
let myNickName:string = "harsh";
let mylastName:string = 'jinwal';

myFullName = myNickName + mylastName ;
console.log(myFullName);

// Q---

  let message:string = "Hello Typescript";
  let messageLength:number = message.length;
  console.log(messageLength);

  let upperCaseTxt:string = message.toUpperCase();
  let LowerCaseTxt:string = message.toLowerCase();
  console.log(upperCaseTxt);
  console.log(LowerCaseTxt);

  let subs:string = message.substring(3,6);
  let comparsion:string = message.concat(message, myFullName);
  console.log(subs);
  console.log(comparsion);

  let price:number = 499;
  let product:string = "hair dryer";
  let result:string = `The ${product} price is ${price}`;
  console.log(result);




// To traspile into a Js code run this command [ tsc /--path location of ts file ] in terminal --->