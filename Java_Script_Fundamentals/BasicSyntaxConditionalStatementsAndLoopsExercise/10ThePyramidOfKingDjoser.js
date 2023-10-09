function thePyramidOfKingDjoser(base, increment) {
    let [stone, marble, lapis, gold, stage] = [0, 0, 0, 0, 0];
    do {
        stage++;
        let area = (base - 2) ** 2; 
        let perimeter = 4 * base - 4;
        if (base>2) { //not gold stage
            if (stage % 5 !=0) { //marble stage
                marble += perimeter * increment;
            } else { //lapis stage
                lapis += perimeter * increment;
            }
            stone += area * increment;
        } else { //gold stage
            gold = base ** 2 * increment;
        }
        base -= 2;
    } while (base > 0);
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(stage*increment)}`);
}

thePyramidOfKingDjoser (12, 1);