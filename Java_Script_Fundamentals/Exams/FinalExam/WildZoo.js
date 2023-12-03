function solve(input) {
    let animals = {};
    let areas = {};
    for (let part of input) {
        if (part == 'EndDay') break;
        if (part.includes('Add: ')) {
            part = part.slice(5,);
            let [name, quantity, area] = part.split('-');
            quantity = Number(quantity);
            if (name in animals) {
                animals[name].quantity += quantity;
            } else {
                animals[name] = { quantity, area };
            }
        }
        if (part.includes('Feed: ')) {
            part = part.slice(6,);
            let [name, food] = part.split('-');
            if (name in animals) {
                if (animals[name].quantity > +food) {
                    animals[name].quantity -= +food;
                } else {
                    console.log(`${name} was successfully fed`);
                    delete animals[name];
                }
            }
        }
    }
    console.log('Animals:');
    for (let name in animals) {
        console.log(`${name} -> ${animals[name].quantity}g`);
        let area = animals[name].area;
        if (area in areas) {
            areas[area]++;
        } else {
            areas[area] = 1;
        }
    }
    console.log("Areas with hungry animals:");
    for (let area in areas) {
        console.log(` ${area}: ${areas[area]}`);
    }
}

solve(["Add: Adam-4500-ByTheGreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"]);

solve(["Add: Bonie-3490-RiverArea",
    "Add: Maya-6570-WaterfallArea",
    "Add: Adam-4500-ByTheCreek",
    "Add: Bobbie-6570-WaterfallArea",
    "Feed: Jamie-2000",
    "Feed: Adam-2000",
    "Feed: Adam-2500",
    "EndDay"]);

solve(["Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);