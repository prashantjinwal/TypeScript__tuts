// ------**  Union  **-------

// Union types allow you to specify that a varible can hold values of mutiple types.
// You use the | (pipe) symbol to define a union type.

// In typeScript,when using a union type, it is essential to ensure that at 
// least one of the types in the union includes all the required properties .
// Failure to do so will result in a type error during compilation.

const inputValues:(value:string  | number | boolean) => void = (value:string | number | boolean):void =>{
    console.log(value);
}
inputValues("hello");
inputValues(66);
inputValues(true);


// Q - 2 


const userInput:(val:number | string) => void  = (val : number | string):void => {
    if(typeof(val) === "string"){
        console.log( val.toUpperCase() );
    }if (typeof(val) === "number") {
        console.log(val * val);
    }else{                                                                                                  
        throw new Error('Invalid is wrong');
    }
}

    userInput(10);
    userInput("bupinder jogi");


// -----** Intersection **------
// symbol ' & ' represent intersection ..

type Person = {
    name:string;
    age:number;
}

type Employee = {
    emp_id:number;
    department:string;
}
type EmployeDetails = Employee & Person;

const emp : EmployeDetails = {
    name:"Prashant",
    age:18,
    emp_id:44,
    department:"data handing Department"
}



// Q - 3

type User = {
    name : string;
    age : number;
}
type MyLocation = {
    country : string;
    city : string;
}

const user:User = { name:"harsh", age:18 };
const myloc:MyLocation = { country:"India", city:"New Delhi"};

const createUserProfile:(user:User,myloc:MyLocation) => (User & MyLocation) = (user: User,myloc: MyLocation) => {
    return {...user, ...myloc};
}              

const MycompleteInfo:User & MyLocation = createUserProfile(user,myloc)

