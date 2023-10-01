function tennisRanklist (input) {
    let number_of_tournaments = Number(input[0]);
    let starting_points = Number(input[1]);
    let final_points = starting_points;
    let tournament_wins = 0;
    let stage = "";
    for (let count=0; count< number_of_tournaments; count++) {
        stage = input[count + 2];
        if (stage == "W") {
            final_points += 2000;
            tournament_wins += 1;
        }
        else if (stage == "F")
            final_points += 1200;
        else if (stage == "SF")
            final_points += 720;
    }
    console.log(`Final points: ${final_points}`);
    let average_points = Math.floor((final_points - starting_points) / number_of_tournaments);
    console.log(`Average points: ${average_points}`);
    console.log(`${(tournament_wins / number_of_tournaments * 100).toFixed(2)}%`);
}