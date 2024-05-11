type Airplane = {
    name: string;
    color: string;
    speed: number;

    // Nested properties
    direct : {
        city : string,
        country : string
    }
}

const AirplaneImpl : Airplane = {
    name: "Boeing",
    color: "Red",
    speed: 1000,

    // Impl Nested properties
    direct : {
        city : "Bandung",
        country : "Indonesia"
    }
}

console.log(AirplaneImpl)

console.log(AirplaneImpl.speed)

console.log(AirplaneImpl.direct.city)
console.log(AirplaneImpl.direct.country)