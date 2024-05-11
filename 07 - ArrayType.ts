let names : string[];

names = [
    "Nichola", "Saputra", "Joko", "Budi", "Morro", "Handoko"
];
console.log(names);

console.log(names[1]);
console.log(names[2]);

for (let i = 0; i < names.length; i++ ) {
    console.log(i + 1, names[i]);
}