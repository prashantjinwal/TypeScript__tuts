//  In typescript, an a powerful feature that allows you to define 
// a contract for an object shape. It specifies the properties 
// and their types that an object must have tp be considered of 
// that particular interface type. Interfaces are primarily 
// used for type-checking durig developement and do not genrate 
// any javascript code at runtime.

// interface is like type alias'
// interface used for object 

interface Greet {
    name:string;
    age:number;
}

const greets:Greet = {
    name:'Prashant',
    age:28,

}



// Q - 2

interface Product{
    name:string;
    price:number;
    quantity:number;
}
const product:Product = {
    name:'dell',
    price:45000,
    quantity:4,
}

const proror: Product ={
    name:"fnff",
    price:3323,
    quantity:4,
}
console.log(product);

const CalculateTotalPrice:(pro:Product) => number = (pro:Product) => {
    const {price,quantity} = pro;
    return price * quantity;
}

console.log(CalculateTotalPrice(product));
console.log(CalculateTotalPrice(proror));