function cookingByNumbers(...input) {
    let number = Number(input.shift());
    const operation = {
        chop: (value) => value / 2,
        dice: (value) => Math.sqrt(value),
        spice: (value) => value + 1,
        bake: (value) => value * 3,
        fillet: (value) => value * 0.8
    };
    input.forEach(task => console.log(number = operation[task](number)));
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet'); //3 4 2 6 4.8
