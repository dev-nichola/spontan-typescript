function Payback(...payback : number[]) : number {
    let total : number = 0;
    for (let i = 0; i < payback.length; i++) {
        total += payback[i];
    }
    return total;
}

console.log(Payback(100, 200, 300));