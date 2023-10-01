function vowelsSum (input) {
    let inp_str = input[0];
    let total_sum = 0;
    for (count = 0; count < inp_str.length; count++) {
        switch (inp_str[count]) {
            case ("a"):
                total_sum += 1;
                break;
            case ("e"):
                total_sum += 2;
                break;
            case ("i"):
                total_sum += 3;
                break;
            case ("o"):
                total_sum += 4;
                break;
            case ("u"):
                total_sum += 5;
                break;
        }
    }
    console.log(total_sum);
}

// vowelsSum (["hello"]);