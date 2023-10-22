function cookingMasterclass(input) {
    let budget = Number(input[0]);
    let students = input[1];
    let flourPrice = input[2];
    let eggPrice = input[3];
    let apronPrice = input[4];
    let needMoney = 0;
    let free = students;
    for (let student = 1; student <= students; student++) {
        if (student % 5 == 0) free--;
    }
    needMoney = flourPrice * free + 10 * eggPrice * students + apronPrice * (Math.ceil(students * 1.2));
    if (needMoney <= budget) console.log(`Items purchased for ${needMoney.toFixed(2)}$.`);
    else console.log(`${(needMoney - budget).toFixed(2)}$ more needed.`);
}

cookingMasterclass([50, 2, 1.0,

    0.10,

    10.0])

    ;
cookingMasterclass([100, 25,
    4.0,

    1.0,

    6.0]);

