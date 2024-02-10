// static properties & Methods

//  In typescript, static method and properties bolong to the class itselft raher 
// than to instances of the class. By making method and properties static, we can access them
// directly from the class without needing to create an instance of the class. This is useful \
// for utility function or properties that don't rely on instance-specific data

// Ex :- Math Operation Utility - creating a utility class to perfrom various mathematical operations 

class MathOperation {
    public static PI:number = Math.PI;

    public static add(num1:number , num2:number){
        return num1 + num2;
    }

    public static subs(num1:number , num2:number){
        return num1 * num2;
    }

}

console.log (MathOperation.PI);
console.log(MathOperation.add(3,6));
console.log(MathOperation.subs(4,6));