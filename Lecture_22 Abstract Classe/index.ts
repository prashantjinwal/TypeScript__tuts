// Abstract classes provide a way to define common properties 
// and methods that multiple derived classes can share. This Promotes
// code reuse and helps establish a common interface for related classes.

// * abstract classes focus on class inheritance and sharing common functionality,
// * Whereas the useContext hook in React focuses on managing global state and allowing components to 
// consume that states.


//? Example: shape Hierarchy 

// ? Suppose you're bulding a graphics, appliction, and you to create a hierarchy of different shapes.
// you Can use an abstract base class Shape to define common properties and method that all shapes share.


abstract class Shape {
    // protected color :string;      // we cannot create any instance of class toh ye access modifer likhne ka koi sence nhi hai

    constructor (protected color :string){}

    abstract calculateArea():number;
    abstract displayArea:()=> void;

}

class Circle extends Shape {
    constructor (protected color :string, protected radius:number){
        super(color);
    }
    
    public calculateArea():number{
        return Math.PI * this.radius * this.radius;
    }
    displayArea = () => {
        console.log(`This is a ${this.color} circle with radius ${this.radius}`);
    }

}
const instance1 = new Circle("red",5);
console.log(instance1.calculateArea());
console.log(instance1.displayArea());
