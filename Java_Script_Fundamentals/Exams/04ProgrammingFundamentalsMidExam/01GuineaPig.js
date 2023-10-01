function guineaPig (input) {
    let food = Number(input[0]);
    let hay = Number(input[1]);
    let cover = Number(input[2]);
    let weight = Number(input[3]);
    let goShop = false;
    for (let day = 1; day<=30; day++) {
        if (food >= 0.3) food -= 0.3;
        else {
            goShop = true;
            break;
        }
        if (day % 2 == 0) {
            if (hay >= food * 0.05) hay -= food * 0.05;
            else {
                goShop = true;
                break;
            }
        }
        if (day % 3 == 0) {
            if (cover >= weight/3) cover -= weight/3;
            else {
                goShop = true;
                break;
            }
        }
    }
    if (goShop || food < 0.00001 || hay < 0.00001 || cover < 0.0001) console.log("Merry must go to the pet store!");
    else console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
}

guineaPig (["10", 
"5", 
"5.2", 
"1"]);
guineaPig (["1", 
"1.5", 
"3", 
"1.5"]);
guineaPig (["9",
"5",
"5.2",
"1"]);

