function AreaOfFigures (input) {
    let area = 0;
    let figure = input[0];
    if (figure == "square") {
        let side = Number(input[1]);
        area = side ** 2;
    }
    else if (figure == "rectangle") {
        let length = Number(input[1]);
        let width = Number(input[2]);
        area = length * width;
    }
    else if (figure == "circle") {
        let radius = Number(input[1]);
        area = Math.PI * radius * radius;
    }
    else if (figure == "triangle") {
        let height = Number(input[1]);
        let base = Number(input[2]);
        area = height * base / 2;
    }
    console.log (`${area.toFixed(3)}`);
}

// AreaOfFigures (["rectangle","7","2.5"]);
