function heartDelivery (input) {
    let hous = input[0].split('@');
    for (let i =0; i<hous.length; i++) hous[i] = Number(hous[i]);
    let currentIndex = 0;
    for (let index = 1; index<input.length; index++) {
        let commands = input[index].split(' ');
        let command = commands[0];
        if (command == 'Love!') break;
        let jump = Number(commands[1]);
        if (jump + currentIndex < hous.length) currentIndex += jump;
        else currentIndex = 0;
        if (hous[currentIndex] > 2) {
            hous[currentIndex] -= 2;
        } else if (hous[currentIndex] == 2)  {
            hous[currentIndex] = 0;
            console.log(`Place ${currentIndex} has Valentine's day.`);
        } else if (hous[currentIndex] == 0) console.log(`Place ${currentIndex} already had Valentine's day.`); 
    }
    console.log(`Cupid's last position was ${currentIndex}.`);
    let count = 0;
    for (let i=0; i<hous.length; i++) {
        if (hous[i] > 0 ) count++;
    }
    if (count == 0) console.log("Mission was successful.");
    else console.log(`Cupid has failed ${count} places.`);
}

heartDelivery (["10@10@10@2",
"Jump 1",
"Jump 2",
"Love!"]);
heartDelivery (["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])
;