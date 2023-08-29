class User{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // getter untuk mengambil nama pengguna 
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }   
    // setter mengatur untuk nama lengkat pengguna
    set fullName(newFullName){
        const parts = newFullName.split('');
        this.firstName = parts[0];
        this.lastName = parts[1]; 
    }
}

const myUser = new User('John', 'Doe');
// console.log(myUser)

console.log(myUser.fullName); // Output: John Doe

myUser.fullName = 'Jane Smith';
console.log(myUser.firstName); // Output: Jane
console.log(myUser.lastName);  // Output: Smith