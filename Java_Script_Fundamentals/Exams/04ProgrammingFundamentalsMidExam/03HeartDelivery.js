function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number);
    let [currentIndex, count] = [0, 0];
    for (let part of input) {
        let commands = part.split(' ');
        if (commands[0] == 'Love!') break;
        let jump = Number(commands[1]);
        currentIndex += jump;
        if (currentIndex >= houses.length) currentIndex = 0;
        houses[currentIndex] -= 2;
        if (!houses[currentIndex]) console.log(`Place ${currentIndex} has Valentine's day.`);
        else if (houses[currentIndex] < 0) {
            console.log(`Place ${currentIndex} already had Valentine's day.`);
            houses[currentIndex] = 0;
        }
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    houses.forEach(x => { if (x) count++ });
    if (!count) console.log("Mission was successful.");
    else console.log(`Cupid has failed ${count} places.`);
} 

heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"]);
console.log('-----');
heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"])
    ;