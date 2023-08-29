class Person {
    firstName = '';
    lastName = '';

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person = new Person('John', 'Doe');
console.log(person.getFullName()); // Output: John Doe
console.log(person.firstName); // Output: John
