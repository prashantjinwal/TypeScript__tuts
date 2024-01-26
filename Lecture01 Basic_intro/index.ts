// @ts-ignore
let obj1 = {
    name : 'prashant',
    age : 17,
    studentID : 123445
}
console.log(obj1.age)
// console.log(obj1.marks)     // In js this line don't throw error 

// ----------------------------------------
// Todo 1: write a program to add two numbers ? 
// Todo 2: How to catch errors & solve it ?
// Todo 3: Ts configuration file 
// ----------------------------------------



// ---- In JS ----

// *func define
// @ts-ignore
function sum(a,b){
    return a+b;
}

// *func call
console.log(sum(3,"harsh"));  // this is worng way to write a code and meaning less and js don't throw error
// output - 3harsh

// ---- In TS ----

// *func defin

// @ts-ignore
function sum2(x:number , y:number ){
    return x + y;
}

// *func call
console.log(sum2(4,6))
// console.log(sum2(4,"harsh"))    // Throw a error because we define a type of input argument






// conclusion --- basicly I learn about ts config file and why we write a code in ts and transpile in js 