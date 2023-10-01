function cinema(input) {
    let cinema_type = input[0];
    let cinema_row = Number(input[1]);  
    let cinema_column = Number(input[2]);
    let price = 0;
    if (cinema_type === "Premiere") 
        price = 12;
    else if (cinema_type == "Normal")
        price = 7.5;
    else if (cinema_type == "Discount")
        price = 5;
    total_price = cinema_row * cinema_column * price;
    console.log(`${total_price.toFixed(2)} leva`)
}