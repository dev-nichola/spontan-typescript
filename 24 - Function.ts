
type Home = {
    name: string;
}

let home : Home = {
    name : "Rumah Joglo"
}

// Prosedur
function procedure() {
    console.log("this is procedure");
}

// function returning value
function returning() {
    return 1;
}

// method 
function method() {
    let rumah : string = home.name;

    console.log(rumah);
}

procedure();
console.log(returning());
method();
