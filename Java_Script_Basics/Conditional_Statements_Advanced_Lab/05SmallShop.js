function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let price = 0
    if (product === "coffee")
        if (city === "Sofia")
            price = 0.50
        else if (city === "Plovdiv")
            price = 0.40
        else if (city === "Varna")
            price = 0.45
    if (product === "water")
        if (city === "Sofia")
            price = 0.80
        else if (city === "Plovdiv")
            price = 0.70
        else if (city === "Varna")
            price = 0.70
    if (product === "beer")
        if (city === "Sofia")
            price = 1.2
        else if (city === "Plovdiv")
            price = 1.15
        else if (city == "Varna")
            price = 1.10
    if (product == "sweets")
        if (city == "Sofia")
            price = 1.45
        else if (city == "Plovdiv")
            price = 1.30
        else if (city == "Varna")
            price = 1.35
    if (product == "peanuts")
        if (city == "Sofia")
            price = 1.60
        else if (city == "Plovdiv")
            price = 1.50
        else if (city == "Varna")
            price = 1.55
    price *= quantity
    console.log(price);
}