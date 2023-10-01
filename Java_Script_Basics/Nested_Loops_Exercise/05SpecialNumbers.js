function specialNumbers (input) {
    let number = Number(input[0]);
    let four_num = 0;
    for (let special_number=1111; special_number < 10000; special_number++){
        let number_str = String(special_number);
        for (let count = 0; count < 4; count++)
            if (Number(number_str[count]) > 0)
                if (number % Number(number_str[count]) === 0)
                    four_num += 1;
        if (four_num === 4)
            process.stdout.write(`${special_number} `);
        four_num = 0;
    }
}

specialNumbers (["3"])