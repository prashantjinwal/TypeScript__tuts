//  use of any 

let MyNum:any = 65;
MyNum = "harsh";
MyNum = true;

// use of Unknown

 let MyNum2:unknown;
 MyNum2  = "harsh" 
 MyNum2 = true;
 MyNum2 = 6;


 if(typeof MyNum2 === "number" ){
    console.log(MyNum2 + 5);
 }
  else if(typeof MyNum2 === "object" ){
    console.log("Bool");
 }
 else if(typeof MyNum2 ==="string" ){
    console.log("String type");
 }
 


 async function fetchData(): Promise<unknown> {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
 }
 async function processData() {
    const response = await fetchData();
    if(typeof response === 'object'){
        //Perform operation on the response object 
        
    }
 }


 // use tsc path comand to transpile into a js coode