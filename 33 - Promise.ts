let data : Promise<any> ;

function JanjiNgefetch() : Promise<any> {
    return new Promise((resolve, reject) => {
        fetch("https://fakestoreapi.com/products").then((response) => {
            return response.json();
        }).then((json) => {
            resolve(json);
        }). catch((err) => {
            reject(err)
        });
    
 
    })
}

JanjiNgefetch().then((json) => {
    data = json 
    console.log(data)
}).catch((err) => {
    console.log(err)
})


