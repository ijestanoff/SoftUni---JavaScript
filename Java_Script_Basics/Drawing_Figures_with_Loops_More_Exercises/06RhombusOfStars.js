function rhombusOfStars (input) {
    let number = Number(input[0]);
    let row_string = ""; 
    for (let up_part=1; up_part< number + 1; up_part++){
        row_string = " ".repeat(number - up_part) + "*" + " *".repeat(up_part - 1);
        console.log(row_string);
    }
    for (let down_part=number - 1; down_part > 0; down_part--){
        row_string = " ".repeat(number - down_part) + "*" + " *".repeat(down_part - 1);
        console.log(row_string);
    }
}

//rhombusOfStars(["8"]);