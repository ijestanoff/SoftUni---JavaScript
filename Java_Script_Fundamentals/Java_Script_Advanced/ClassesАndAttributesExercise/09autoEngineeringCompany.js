function autoEngineeringCompany(input) {
    const register = {};
    input.forEach(part => {
        let [carBrand, carModel, producedCars] = part.split(' | ');
        producedCars = Number(producedCars);
        if (!(carBrand in register)) {
            register[carBrand] = { [carModel]: producedCars };
        } else if (!(carModel in register[carBrand])) {
            register[carBrand][carModel] = producedCars;
        } else register[carBrand][carModel] += producedCars;
    });
    Object.entries(register).forEach(part => {
        console.log(part[0]);
        Object.entries(part[1]).forEach(item => console.log(`###${item[0]} -> ${item[1]}`));
    });
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
);