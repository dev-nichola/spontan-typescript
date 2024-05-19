async function getAllProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    } catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        } else {
            console.log("An unknown error occurred.");
        }
    }
}

getAllProducts();
