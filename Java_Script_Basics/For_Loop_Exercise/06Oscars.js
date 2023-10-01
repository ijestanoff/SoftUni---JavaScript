function oscars (input) {
    let actor_name = input[0];
    let point_from_academy = Number(input[1]);
    let judge_number = Number(input[2]);
    let total_points = point_from_academy;
    let judge_name = '';
    let points_from_judge = 0;
    for (count=0; count<judge_number; count++) {
        judge_name = input[3 + count*2];
        points_from_judge = Number(input[4 + count*2]);
        total_points += judge_name.length * points_from_judge / 2;
        if (total_points > 1250.5) {
            console.log(`Congratulations, ${actor_name} got a nominee for leading role with ${total_points.toFixed(1)}!`);
            break;
        }
    }
    if (total_points <= 1250.5)
        console.log(`Sorry, ${actor_name} you need ${(1250.5 - total_points).toFixed(1)} more!`);    
}

oscars (["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])
