// defining a tuple type for person infomation
type PersonInfo = readonly [string , number , boolean];

// function to display person infomation 

const displayPesiNfo : (person : PersonInfo) => void = (person:PersonInfo): void =>{
    const [name,age ,hasDriverLicence] = person;
    console.log(`Name ${name}, Age ${age}, Driver's Licence : ${hasDriverLicence ? "yes" : "no" } `);
}

// Example usage 
const person1:PersonInfo = ["prashant",19,true];
const person2:PersonInfo = ["harsh",17,false];
displayPesiNfo(person1);


// Q - 2

type ProductInfo = readonly [string, number, number];

    const ProductFun : (product : ProductInfo) => void = (product : ProductInfo): void =>{
        const [name , price , quant] = product;
        console.log(`${name} price is ${price} and in stock available ${quant}`);
    }

    const product1:ProductInfo = ["greenTea",56, 660];
    const product2:ProductInfo = ["Coffe", 70,1200];
    ProductFun(product1);
    ProductFun(product2);


//  Q - 3

type grade  =  readonly[string, number, string, number, string, number ];

    const DisplayMarks:(student : grade) => string = (student : grade ):string =>{
        const[sub1, mathMarks , sub2 , sciMarks , sub3 , EngMarks ] = student;
        const avg = ( mathMarks + sciMarks + EngMarks )/3;
        return `your avgerage marks in  ${sub1}, ${sub2}, ${sub3} is ${avg}`;
    }

    const student1:grade = ["mathMatics", 56 ,"C++ programing", 99 , "mechanics", 77 ];
    const student2:grade = ["mathMatics", 90 ,"C++ programing", 33 , "mechanics", 55 ];

    DisplayMarks(student1);
    DisplayMarks(student2);