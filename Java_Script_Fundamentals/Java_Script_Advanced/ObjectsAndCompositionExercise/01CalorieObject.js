function calorieObject (input) {
    object = {};
    while (input.length) 
        object[input.shift()] = +input.shift();
    console.log(object);
}

calorieObject (['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject (['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);