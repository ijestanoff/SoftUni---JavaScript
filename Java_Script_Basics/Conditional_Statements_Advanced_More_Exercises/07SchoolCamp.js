function scoolCamp (input) {
    let season = input[0]; 
    let children_type = input[1]; 
    let children_number = Number(input[2]);
    let sleeps_number = Number(input[3]);
    let price_per_sleep = 0;
    let discount = 0;
    let sport_type = "";
    if (season === "Winter")
        if (children_type === "boys") {
            price_per_sleep = 9.6;
            sport_type = "Judo";
        } else if (children_type === "girls") {
            price_per_sleep = 9.6;
            sport_type = "Gymnastics";
        } else {
            price_per_sleep = 10;
            sport_type = "Ski";
        }
    else if (season === "Spring")
        if (children_type === "boys") {
            price_per_sleep = 7.2;
            sport_type = "Tennis";
        } else if (children_type == "girls") {
            price_per_sleep = 7.2;
            sport_type = "Athletics";
        } else {
            price_per_sleep = 9.5;
            sport_type = "Cycling";
        }
    else if (season === "Summer")
        if (children_type === "boys") {
            price_per_sleep = 15;
            sport_type = "Football";
        } else if (children_type == "girls") {
            price_per_sleep = 15;
            sport_type = "Volleyball";
        } else {
            price_per_sleep = 20;
            sport_type = "Swimming";
        }
    let total_price = children_number * price_per_sleep * sleeps_number;
    if (children_number >= 50)
        discount = 0.5;
    else if (children_number >= 20)
        discount = 0.15;
    else if (children_number >= 10)
        discount = 0.05;
    total_price *= 1 - discount;
    console.log(`${sport_type} ${total_price.toFixed(2)} lv.`);
}