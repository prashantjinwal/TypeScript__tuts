// ! Array in TS 

// In ts , you can create and initialize arrays using various approaches
// (1). Using square brackets :

    const numbers:number[] = [1,2,3,4,5,6];

// (2). Using the Array constructor :

    const number1:number[] = new Array(1,2,3,4,5,6,7);

// (3). Using the Array of method :

    const names:string[] = Array.of("prashant", "harsh", "yogesh");

//  Operation : Accessing elements using index :
    console.log(names[3]);
    console.log(names[2]);

    console.log(names.length);
    const namef = names.at(2)

    // Arrays in Ts come with bulit-in methods that allow you to perform common 
    // operatons

    const fruits:string[] = ["apple", "banana", "orange", "mango"];
    // (A) Adding elements to an array using push :
        const newUpdateArr = fruits.push("Kiwi");
        console.log(newUpdateArr);
    // (B) Removing elements from an array using pop :
        const lastData = fruits.pop();
        console.log(lastData);

    //  Iterating over elements :
    //  You can iterate over the elements of an array using various looping constructs such 
    // as for , for ...of , or array method like forEach 

    // Using for loop
    for(let i = 0; i < fruits.length; i++){
        console.log(fruits[i]);
    }
    // Using for ...of loop
    for(const fruit of fruits){
        console.log(fruit);
    } 
    // Using ForEach method
    fruits.forEach((curVal) => console.log(curVal))
