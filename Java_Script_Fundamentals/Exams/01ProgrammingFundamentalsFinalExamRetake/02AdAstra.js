function adAstra([input]) {
    let [totalKCals, output] = [0, ''];
    let pattern = /([#|])(?<product>[A-Za-z\s]+)\1(?<best>\d{2}\/\d{2}\/\d{2})\1(?<amount>\d+)\1/g;
    
    for (let match of input.matchAll(pattern)) {
        let { product, best, amount } = match.groups;
        totalKCals += +amount;
        output += `\nItem: ${product}, Best before: ${best}, Nutrition: ${amount}`
    }
    console.log(`You have food to last you for: ${Math.floor(totalKCals / 2000)} days!${output}`);
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']);