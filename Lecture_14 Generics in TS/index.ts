// Generics in TypeScript allow you to create reusable components or function that can work with multiple data types.
//  < Placeholder >

function logAndReturn <T>(value:T):T{
    return value;
}

const numberResult = logAndReturn<number>(43);
const stringResult = logAndReturn<string>("Generics power");
const booleanResult = logAndReturn<boolean>(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

// Q - 2

const add = <T>(a:T , b:T):T =>{
    return a as any + b as any;
}
const result1 = add<number>(5,10);
const result2 = add<string>("hey", "dude");


console.log(result1)
console.log(result2)