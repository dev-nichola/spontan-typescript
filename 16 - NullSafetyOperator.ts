type Horse = {
    Name : string,
    Age : number | null // OR
}

let HorseImpl : object = {
    Name : "Nichola",
    Age : null
}

console.log(HorseImpl?.Age)