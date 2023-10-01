function trapeziodArea (input) {
    let trapeziod_up_base = Number(input[0]);
    let trapeziod_down_base = Number(input[1]);
    let trapeziod_high = Number(input[2]);
    let trapeziod_area = ((trapeziod_up_base+trapeziod_down_base)/2)*trapeziod_high;
    console.log(`${trapeziod_area.toFixed(2)}`);
}