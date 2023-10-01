function histogram (input) {
    let number = Number(input[0]);
    let p_0_199 = 0;
    let p_200_399 = 0;
    let p_400_599 = 0;
    let p_600_799 = 0;
    let p_800_1000 = 0;
    for (let count=0; count<number; count++){
        let element = (input[count+1]);
        if (element < 200)
            p_0_199 += 1;
        else if (element < 400)
            p_200_399 += 1;
        else if (element < 600)
            p_400_599 += 1;
        else if (element < 800)
            p_600_799 += 1;
        else
            p_800_1000 += 1;
    }
    console.log(`${((p_0_199/number)*100).toFixed(2)}%`);
    console.log(`${((p_200_399/number)*100).toFixed(2)}%`);
    console.log(`${((p_400_599/number)*100).toFixed(2)}%`);
    console.log(`${((p_600_799/number)*100).toFixed(2)}%`);
    console.log(`${((p_800_1000/number)*100).toFixed(2)}%`);
}

// histogram (["9",
// "367", 
// "99", 
// "200", 
// "799",
// "999",
// "333",
// "555",
// "111",
// "9"])

