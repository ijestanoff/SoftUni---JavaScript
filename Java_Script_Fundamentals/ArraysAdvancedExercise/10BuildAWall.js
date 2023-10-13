function bildAWall (teams) {
    let pesos = 0;
    let concrete = [];
    let length = teams.length;
    let wallLength = 0;
    while (wallLength < 30*length) {
        wallLength = 0;
        let currentConcrete = 0;
        for (let index = 0; index<length; index++) {
            if (teams[index] < 30) {
                currentConcrete += 195;
                teams[index]++;
                pesos += 370500;
            }
            wallLength += teams[index];
        }
        concrete.push(currentConcrete);
    }
    console.log(concrete.join(', '));
    console.log(`${pesos} pesos`);
}

bildAWall ([21, 25, 28]);
bildAWall ([17]);
bildAWall ([17, 22, 17, 19, 17]);