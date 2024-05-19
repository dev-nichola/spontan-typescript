export const myVar : number = 10;

export function myFunc() : void {
    console.log("Export Biasa");
}

export const Hello = () : void => {
    console.log("Hello Const Export");
}

// Menggunakan export default untuk mengekspor satu entitas utama dari sebuah modul.
export default function sayHMMM() : void {
    console.log("HMMMM");
}