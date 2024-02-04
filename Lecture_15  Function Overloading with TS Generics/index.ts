// IMP : When we use generic and non generic type together then while caling 
// the function we need to defined the type in a manner but with non generics we don't 

function add(a:number,b:number):number;
function add(a:string,b:string):string;
function add(a:any,b:any):any{
    return a + b;
}
const result1:number = add(5 ,10);
const result2:string = add("hello","world");


// using generics  :--

function add1<T,U> (a:T, b:U ):void{
    console.log(typeof(a));
    console.log(typeof(b));
}

const result3:void = add1<number,number>(5,6);
const result5:void = add1<number,string>(5,"hello");
const result4:void = add1<string,string>("hello", "world");
const result6:void = add1<boolean,string>(true , "world");

console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);







