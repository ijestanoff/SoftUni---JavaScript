function triangleArea (input) {
    let triangle_base = Number(input[0]);
    let triangle_high = Number(input[1]);
    let triangle_area = (triangle_base*triangle_high)/2;
    console.log(`${triangle_area.toFixed(2)}`);
}