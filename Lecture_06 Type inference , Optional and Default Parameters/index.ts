//  Default parameter 

function system(name:string , id:number = 3):string{     // here id was a default parameter becasue we assigned id as a default 3
    return ` welcome, ${name} in this company your and id is ${id} `;

}
   const emp =  system("prashant");
   console.log(emp)

// Optional parameter 

function system2(name:string , id?:number):string{     // here id was a optional parameter because we put a ? symbol after a parameter decalartion
    if(id){
        return ` Welcome, ${name} in this company and your id is ${id} `;
    }else{
        return ` Welcome, ${name} in this company `;
    }

}
  const emp1 =  system2("harsh");
  const emp2 =  system2("Yogesh",5);
  console.log(emp1);
  console.log(emp2);