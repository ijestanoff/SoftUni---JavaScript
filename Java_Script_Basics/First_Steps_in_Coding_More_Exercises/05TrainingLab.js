function trainingLab (input) {
    let room_length = Number(input[0])*100;
    let room_width = Number(input[1])*100;
    let length_counter =  Math.floor (room_length / 120);
    let width_counter = Math.floor((room_width - 100) / 70);
    let total = length_counter * width_counter - 3
    console.log(total);
}