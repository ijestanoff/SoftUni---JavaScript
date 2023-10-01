function housePainting (input) {
    let house_heght = Number(input[0]);
    let side_length = Number(input[1]);
    let roof_height = Number(input[2]);
    let side_wall_area = house_heght * side_length;
    let window = 1.5 * 1.5;
    let front_wall = house_heght * house_heght;
    let door = 1.2 * 2;
    let green_area = side_wall_area * 2 - window * 2 + front_wall * 2 - door;
    let red_area = house_heght * side_length * 2 + 2 * (house_heght * roof_height) / 2;
    let green_paint = green_area / 3.4;
    let red_paint = red_area / 4.3;
    console.log(`${green_paint.toFixed(2)}`);
    console.log(`${red_paint.toFixed(2)}`);
}