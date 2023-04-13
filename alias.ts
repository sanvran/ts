type User = {
   name: string,
   age: number
}
//assigning custom type User
const user: User = {
   name: 'Sanjeev',
   age: 22
}

function userLogin(userData: User) : User{ 
   return userData;
};
console.log(userLogin({name: 'Sam', age: 34}))