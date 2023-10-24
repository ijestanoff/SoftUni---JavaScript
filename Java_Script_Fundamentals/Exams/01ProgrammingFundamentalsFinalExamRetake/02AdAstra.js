function adAstra (input) {
    let totalCalories = 0;
    let regex = /([#|])(?<product>[A-Za-z\s]+)\1(?<best>\d{2}\/\d{2}\/\d{2})\1(?<amount>\d+)\1/g;
    let match = input[0].matchAll(regex);
    for (let curMatch of match) {
        totalCalories += Number(curMatch.groups.amount);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories/2000)} days!`);
    match = input[0].matchAll(regex);
    for (let curMatch of match) {
        console.log(`Item: ${curMatch.groups.product}, Best before: ${curMatch.groups.best}, Nutrition: ${curMatch.groups.amount}`);
    }
}

adAstra (['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra (['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra (['Hello|#Invalid food#19/03/20#450|$5*(@' ]);