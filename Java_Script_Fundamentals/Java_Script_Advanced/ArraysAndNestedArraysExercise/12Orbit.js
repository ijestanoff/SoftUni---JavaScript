function orbit (input) {
    function inRange (width, height, yy, xx) {
        if (xx >=0 && xx < width && yy >=0 && yy < height) {
            return true;
        }
        return false;
    }

    let width = input[0];
    let height = input[1];
    let x = input[3];
    let y = input[2];
    let orbit = [];
    let count = 1;
    const TOTAL = width * height;
    let fill = 1;
    for (let i = 0; i<height; i++) {
        orbit [i] = [];
        for (let j = 0; j < width; j++){
            orbit[i][j] = 1;
        }
    }
    let topBorder = y-1;
    let rightBorder = x + 1;
    let bottomBorder = y + 1;
    let leftBorder = x - 1;
    while (fill < TOTAL) {
        count++;
        for (let index = leftBorder; index < rightBorder; index++){
            if (inRange(width, height, topBorder, index)) {
                orbit[topBorder][index] = count;
                fill++;
            }
        }
        for (let index = topBorder; index < bottomBorder; index++){
            if (inRange(width, height, index, rightBorder)) {
                orbit[index][rightBorder] = count;
                fill++;
            }
        }
        for (let index = rightBorder; index > leftBorder; index--){
            if (inRange(width, height, bottomBorder, index)) {
                orbit[bottomBorder][index] = count;
                fill++;
            }
        }
        for (let index = bottomBorder; index > topBorder; index--){
            if (inRange(width, height, index, leftBorder)) {
                orbit[index][leftBorder] = count;
                fill++;
            }
        }
        topBorder--;
        rightBorder++;
        bottomBorder++;
        leftBorder--;
    }
    for (let index=0; index<height; index++){
        console.log(orbit[index].join(' '));
    }
}

//orbit ([4, 4, 0, 0]);
//orbit ([6, 5, 2, 2]);
orbit ([10, 5, 2, 3]);
