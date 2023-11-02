function worldTour(input) {
    let stops = input.shift();
    for (let part of input) {
        let items = part.split(':');
        let command = items[0];
        if (command == 'Add Stop') {
            let index = Number(items[1]);
            let string = items[2];
            if (index >= 0 && index < stops.length) {
                stops = stops.slice(0,index) + string + stops.slice(index);
            }
        } else if (command == 'Remove Stop') {
            let startIndex = Number(items[1]);
            let endIndex = Number(items[2]);
            if (startIndex >=0 && startIndex < stops.length && endIndex >=0 && endIndex < stops.length && startIndex < endIndex) {
                stops = stops.slice(0,startIndex) + stops.slice(endIndex+1); 
            }
        } else if (command == 'Switch') {
            let oldString = items[1];
            let newString = items[2];
            stops = stops.replace(new RegExp(oldString, 'g'), newString);
        }
        if (command == 'Travel') break;
        else console.log(stops);
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}

worldTour((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
);
console.log('------');
worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])
);