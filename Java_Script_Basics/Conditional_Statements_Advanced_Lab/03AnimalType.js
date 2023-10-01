function animalType(input) {
    let animal_type = input[0];
    if (animal_type === "dog")
        console.log("mammal");
    else if ((animal_type === "crocodile") | (animal_type === "tortoise") | (animal_type === "snake"))
        console.log("reptile");
    else
        console.log("unknown");
}