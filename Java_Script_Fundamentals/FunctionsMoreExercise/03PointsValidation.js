function pointsValidation (input) {
    function valid (x_1, y_1, x_2, y_2) {
        let distance = Math.sqrt((x_1 - x_2) ** 2 + (y_1-y_2)**2);
        if (distance % 1 == 0) return 'is valid';
        return 'is invalid'; 
    }
    let x1 = input[0];
    let y1 = input[1];
    let x2 = input[2];
    let y2 = input[3];
    console.log(`{${x1}, ${y1}} to {0, 0} ${valid(x1,y1,0,0)}`);
    console.log(`{${x2}, ${y2}} to {0, 0} ${valid(x2,y2,0,0)}`);
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} ${valid(x1,y1,x2,y2)}`);
}

pointsValidation ([3, 0, 0, 4]);
pointsValidation ([2, 1, 1, 1]);