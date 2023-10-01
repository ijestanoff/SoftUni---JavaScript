function sleepyTomCat (input) {
    const TOM_GAME_LEVEL = 30000;
    const WORK_DAY_PLAY = 63;
    const REST_DAY_PLAY = 127;
    let rest_day = Number(input[0]);
    let game_time = rest_day * REST_DAY_PLAY + (365 - rest_day) * WORK_DAY_PLAY;
    if (game_time > TOM_GAME_LEVEL) {
        difference_time = game_time - TOM_GAME_LEVEL
        console.log(`Tom will run away\n${Math.floor(difference_time / 60)} hours and ${difference_time % 60} minutes more for play`);
    } else {
        difference_time = TOM_GAME_LEVEL - game_time;
        console.log(`Tom sleeps well\n${Math.floor(difference_time / 60)} hours and ${difference_time % 60} minutes less for play`);
    }
}