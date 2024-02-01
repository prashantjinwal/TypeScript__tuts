// In typescript, objects are used to represent data with keyvalue
// pairs. Each key in the object is a sting (or a symbol in ES6) that maps to a value .

// Lets consider a real-life example of representing a person's infomation 
// using TypeScript objects
//  --> name, age, isStudent, address {city, country}

// ---- Object ----

const person:{

    name:string;
    age:number;
    isStudent :boolean;
    address: {city:string; country:string}

} = {
    name : "Prashant",
    age : 27,
    isStudent : true,
    address:{
        city: "Delhi ka badmass",
        country: "India"
    }
}

// // Todo accessing the object data

console.log(person.address.country);

// // Todo Upadating object properties 

person.address.country = "Nepal";
//// person.address.country = 123;   // In js this is valid but In ts we can't change value in other data type
console.log(person.address.country);


// ---- Type Aliases ----


// In typescript, a type alias is a way to give a name to a specific
//  type or combination of types . it allows you to create a custom name
// name for a type, making it easier to reuse and refers to the 
//  same type in different parts of your code. Type aliases 
// provide better readability, organization, and abstraction
// of complex types


// to define a type alias, you use the type keyword followed by the
// alias name and the type definition


type Person = {
    name:string;
    age:number;
    isStudent :boolean;
    class ?: string  // optional property usign ? symbol
    address: {city:string; country:string}
}

const person2:Person = {
    name : "Prashant",
    age : 27,
    isStudent : true,
    address:{
        city: "Delhi ka badmass",
        country: "India"
    }
}

const person3:Person = {
    name : "Harsh",
    age : 18,
    isStudent : true,
    address:{
        city: "Delhi ka badmass",
        country: "Africa"
    }
}
const person4:Person = {
    name : "Yogesh",
    age : 17,
    isStudent : true,
    address:{
        city: "Desh ka badmass",
        country: "Pakistan"
    }
}


// --- Q ---

type Product = {
    name : string;
    price : number;
    quantity : number
}

const product:Product = {
    name : "laptop",
    price : 45000,
    quantity : 4
}

const CalTotalPrice = (product:Product) =>{
 return `${product.name} total cost ${product.price * product.quantity}  `
}

console.log(CalTotalPrice(product));
