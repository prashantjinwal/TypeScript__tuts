// ** ---- Enums ---- **

//  Enums in Typescript are commonly used when you want to represent a set of related
// values and choose value from mutiple options . Enums provide a convenient way to 
// define a set of named and associate them with specific meanings.



// * In typescript, when enum constants are not explicitly assigned numeric values, they 
// are  automatically assigned incremental numeric values starting from 0. The default numeric 
//  value for the first enum constant is 0 , and subsequent enum constant receive values incremented by 1


enum Role {
    user = "user",
    admin = "admin"
}

type LoginDetail = {
    name?:string;
    email:string;
    password:number;
    role:Role
}

const user1:LoginDetail = {
    name : "prashant",
    email : "prashant123@gmail.com",
    password:123,
    role:Role.admin
}


const user2:LoginDetail = {
    name:"harsh",
    email:"harsh123@gmail.com",
    password : 323,
    role:Role.user,

}
const isAdmin:(user1:LoginDetail) => string =  (user:LoginDetail) =>{
    const {email , role} = user;
    return role === "admin" ? `${email} is allowed to edited a docs ` : `${email} is not allowed to edit a docs pls get lost`;

}
console.log(isAdmin(user1));
console.log(isAdmin(user2));