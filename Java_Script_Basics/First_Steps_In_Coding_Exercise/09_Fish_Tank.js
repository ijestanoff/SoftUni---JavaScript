function fishTank(input){
    let aqua_length = Number(input[0]);
    let aqua_width = Number(input[1]);
    let aqua_hight = Number(input[2]);
    let percent = Number(input[3]) / 100;
    let volume = (aqua_length * aqua_width * aqua_hight) / 1000;
    let total_volume = volume - volume * percent;
    console.log (total_volume);
}