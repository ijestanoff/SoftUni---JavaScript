function specialNumbers(num) {
    let sum = 0;
    let is_magic = '';
    for (count = 1; count<=num; count++){
        sum = 0;
        str_count =  String(count);
        for (index = 0; index < str_count.length; index++){
            sum += Number(str_count[index]);
        }
        if (sum == 5 || sum == 7 || sum == 11) is_magic = "True";
        else is_magic = "False";
        console.log(`${count} -> ${is_magic}`);
    }
}

specialNumbers (20);