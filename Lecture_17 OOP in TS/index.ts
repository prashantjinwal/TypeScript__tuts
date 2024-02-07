// How to create a class and also instance of class in ts 

// A class in terms of OOP is a blueprint for 
// creating objects .
// A class is like a blueprint for creating similar things.


// In TypeScript, there is a convention to use PascalCase (also known as UpperCase)
// for class names. This means that class names should start with a capital
// letter and each subsequent word in the class name should also begin with a capital letter.


class Persons {
    name:string ;
    age:number ;
    hobbies:string[];
    constructor(name:string, age:number, hobbies:string[]){
        this.name = name ;
        this.age = age;
        this.hobbies = hobbies;
    }
}

// const pers1:Persons = new Persons();
// console.log(pers1.hobbies);
const pers1:Persons = new Persons("Prashant", 18, ["Programing", "Bathroom Singing"]);
const pers2:Persons = new Persons("Harsh", 19, ["Sleep", "Gaming"]);

console.log(pers1);



// <<<-------***---- Inheritance in Ts ----***------->>>

// Inheritance allows a class to reuse the functionality of an exising class
// without rewriting it.

// Inheritance is a mechanism in which one class acquires the property of 
// another class. For example, a child inherits the traits of his/her parents.


class PersonsI {
    name:string ;
    age:number ;
    hobbies:string[];
    constructor(name:string, age:number, hobbies:string[]){
        this.name = name ;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce():string{
        return `Hi, I'm ${this.name} and I'm ${this.age} years old And I love ${this.hobbies.join(",")}.`
    }
}

class Student extends PersonsI{
    grade:number;
    constructor(name:string, age:number, hobbies:string[],grade:number){
        super(name , age , hobbies);
        this.grade = grade;
    }

    introduce():string{
        return `${super.introduce()} And My grade is ${this.grade}`
    
        
    }
    
}

const pers3:PersonsI = new PersonsI("Prashant", 18, ["Programing", "Bathroom Singing"]);
const pers4:PersonsI = new PersonsI("Harsh", 19, ["Sleep", "Gaming"]);
const Std1:Student = new Student("Harsh", 19, ["Sleep", "Gaming"], 9);

console.log(pers3.introduce());
console.log(Std1.introduce());


