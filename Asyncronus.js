async function getData() {
    
    try {
        let data =  await fetch('https://dummyjson.com/products/1');
        console.log(data);
    } catch (e){
        console.log(e.message);
    }

}


getData()

// let data



// console.log(data)

// function otherFunction() {
//     console.log("otherFunction")
// }
// function myFunction(otherFunction) {
//     console.log("myFunction")

//     otherFunction()
// }

// myFunction(otherFunction)

// function tambahAngka(a) {
//     return 'test'
// }

// console.log

// console.log(arr)

// let newArr = arr.map((num) => {
//     return num.toString()
// });

// console.log(newArr)


// function filterArray(num) {
//     return num > 3 && num < 7
// }
// let arr =  [1,2,3,4,5,6,7,8,9,10]

// let filter = arr.filter(filterArray)

// console.log(filter)

// function myPromise() {
//     return new Promise((resolve, reject) => {
//         reject(123)
//     })
// }

// let num = 0
// myPromise().then((angka) => {
//     num = angka
// }).catch((e) => {
//     console.log(e)
// })

// console.log(num)