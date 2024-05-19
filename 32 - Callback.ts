function delayMessage(message : string, delay : number, callback : (msg : string) => void) {
    setTimeout(() => {
        console.log(message);
        callback(message)  
    }, delay);
}

function finalCallback(message : string) {
    console.log("Callback message " + message)
}

const message : string = "Hello World!"

delayMessage(message, 2000, finalCallback)


// Callback With Interface

interface Callback {
    (message : string) : void
}


const myFunctionCallback : Callback = (message : string) => {
    console.log("Callback message " + message)
}

function ExecuteCallback(message : string, delay : number, callback : Callback) {
    setTimeout(() => {
        console.log(message);
        callback(message)
    })
}

const pesan : string = "Halo Nichola Saputra Unyu Unyu";
ExecuteCallback(pesan, 2000, myFunctionCallback)