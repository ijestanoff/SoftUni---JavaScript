function fruitOrVegetable (input) {
    let product = input[0];
    let product_type = "unknown";
    if ((product === "banana") | (product === "apple") | (product === "kiwi") | (product === "cherry") | (product === "lemon") | (product === "grapes"))
        product_type = "fruit"
    else if ((product === "tomato") | (product === "cucumber") | (product === "pepper") | (product === "carrot"))
        product_type = "vegetable"
    console.log(product_type);
}