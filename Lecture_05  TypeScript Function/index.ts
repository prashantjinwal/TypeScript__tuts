// Greeting function define 
function greet(name:string, id:number ){
    console.log(`Welcome, ${name} and your id is ${id}`);
}
const greet2 = (name:string, id:number):string =>{
   return `Welcome, ${name} and your id is ${id}`;
}
greet("prashant",1);
greet2("harsh", 2);


// checking palindrome 

let isPalindrome = (palin:string):boolean =>{
    let mypalin = palin.split("").reverse().join("");
    return mypalin === palin;
}
console.log(isPalindrome("123261"));



type DescribableFunction = {
    description:string;
    (someArg:number):boolean;
  };
  function doSomething(fn:DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg:number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);