interface Human {
    firstName: string;
    lastName: string;
}

function createHuman(firstName: string, lastName: string): Human {
    return { firstName, lastName };
}

const manusia: Human = createHuman("Nichola", "Saputra");

console.log(manusia.firstName); 
console.log(manusia.lastName);