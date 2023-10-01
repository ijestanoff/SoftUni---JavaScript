function building (input) {
    let total_floors = Number(input[0]);
    let rooms_per_floor = Number(input[1]);
    let symbol = "";
    let label_string = "";
    for (floor=total_floors; floor>0;floor--) {
        if (floor === total_floors)
            symbol = "L";
        else if (floor % 2 == 0)
            symbol = "O";
        else
            symbol = "A";
        for (room=0; room<rooms_per_floor; room ++)
            label_string += symbol + String(floor) + String(room) + " ";
        console.log(label_string);
        label_string = "";
    }
}