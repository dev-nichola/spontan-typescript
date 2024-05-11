type Person = {
    nameq: string;
    age: number;
    address: string;
}

const personImpl: Person = {
    nameq: "Nichola",
    age: 20,
    address: "Jepang"
}

const { nameq, age, address }: Person = personImpl;

console.log(nameq); 
console.log(age); 
console.log(address); 
