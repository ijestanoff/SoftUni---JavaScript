function triangleOfNumbers (num) {
    for (let count=1; count <= num; count++) {
        let row_string = "";
        for (let row=1; row <= count; row++ ){
            row_string += String(count) + " "; 
        }
        console.log(row_string);
    }
}

triangleOfNumbers(5);