function summerOutfit(input) {
    let degree = Number(input[0]);
    let part_of_day = input[1];
    let outfit="";
    let shoes="";
    if ((degree >= 10 ) & (degree <= 18)) //10 <= degree <= 18:
        if (part_of_day === "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        }
        else if (part_of_day === "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (part_of_day === "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    if ((degree > 18) & (degree <= 24)) //18 < degree <= 24:
        if (part_of_day === "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
        else if (part_of_day == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (part_of_day == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    if (degree >= 25) 
        if (part_of_day == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        }
        else if (part_of_day == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        }
        else if (part_of_day == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`)
}