function combination (input) {
    let total_sum = Number(input[0]);
    let combination_counter = 0;
    for (let x1=0; x1<total_sum + 1; x1++)
        for (let x2=0; x2< total_sum + 1; x2++)
            for (let x3=0; x3<total_sum + 1; x3++)
                if (x1 + x2 + x3 === total_sum)
                    combination_counter += 1;
    console.log(combination_counter);
}