// the function call signature refers to the declaration or definition of a 
// function , which includes the function's name, parameters, and return type.
// it defines the structure and type infomation of a function without inclunding 
// the function's implemention or body. 

// -- Very Important -- => call signatures are typically used inside object type
// notations to describe the shape of function within object types.

type Student = {
    name:string;
    age:number;
    gender?:string;
    greet: (country:string) => string   // method call signature
}

const student1:Student = {
    name: "Prashant",
    age:18,
    greet: ((country): string => `Welcome My name is ${student1.name}, I am ${student1.age}yrs old  & I am from ${country}`)
}
const student2:Student = {
    name: "Harsh",
    age:19,
    greet: ((country): string => `Welcome My name is ${student2.name}, I am ${student2.age}yrs old  & I am from ${country}`)
}

const introduction:(student1:Student) => string = (student1:Student):string =>{
    const {name,age}= student1;
    return `Welcome My name is ${name}, I am ${age}yrs old`;

}
 

console.log(student1.greet('India'));
console.log(student2.greet('Pakistan'));



// example 2

let logDetails:(obj:{name:string, age:number}) => void;

type person ={
    name:string,
    age:number,
};

logDetails = (ninja:person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}