function circleAreaAndPerimeter (input) {
    let radius = Number(input[0]);
    let circle_perimeter = 2 * radius * Math.PI;
    let circle_area = Math.PI * radius * radius;
    console.log(`${circle_area.toFixed(2)}`);
    console.log(`${circle_perimeter.toFixed(2)}`);
}