// Map & Filter Method in Array in TS 

const number:number[] = [1,2,3,4,5];

// <<-- Map Method -->>
// the Map method creates a new array by applying a provided function 
// to each element of the original array. it transforms
// each element and return a new array with the transfomed values .


//  1 : Doubling each number

const doubleData:number[] = number.map((curVal:number) => curVal * 2  );
console.log(doubleData);

//  2 : Converting numbers to string 

const NumToString:string[] = number.map((curVal)=> curVal.toString() );
console.log(NumToString);


// <<--- Filter Method --->>

// 1. Filtering even number 

const EvenNum:number[] = number.filter((curVal:number) => curVal % 2 === 0 ) 
console.log(EvenNum);

//  2. Filtering numbers greater than 3

const GreaterThan3:number[] = number.filter((curEle:number) => curEle > 3);
console.log(GreaterThan3);

const sumARR = number.reduce((previousValue:number , currentValue:number) =>{
   return previousValue + currentValue;
})
console.log(sumARR/number.length);



// write a function called FindMaxValue that takes an array of number as
// a parameter and returns the maximum value in the array 

const MaxNum = number.reduce((a:number, b:number)=>{
return a > b ? a : b ;
})
console.log(MaxNum);



// transpile in js 
