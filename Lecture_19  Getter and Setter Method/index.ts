//  Getter and Setter 

// In typescript classes. you can use getter and setter method to 
// control the access and modification of class properties. Getter
// method allow you to retrive the value of a property, while setter method allow you can to set the 
// value of a property with additional logic or validation.

class Person {
    private _age: number | undefined;

    constructor(
        public name:string,
        
        protected hobbies:string[]
    ){
        
    }  
    public set age(age:number){
        if(age < 0  || age > 150){
            throw new Error ("age is not valid")
        }

        this._age = age;
    }

    // public get age():number{
    //     if( this._age === undefined ){
    //         throw new Error("age is not defined");
    //     }
    //     return this._age
    // }

    introduceParent():string{
        return `HI I'm ${this.name} and I'm ${this._age} years old. I love ${this.hobbies.join(",")}. `
    }
}

const person1:Person = new Person("Prashant", ["coding","buling"]);
person1.age = 44;

console.log(person1.introduceParent());  