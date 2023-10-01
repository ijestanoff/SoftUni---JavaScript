function salary (input) {
    let open_tabs = Number(input[0]);
    let salary = Number(input[1]);
    let current_tab = "";
    for (let count=0; count < open_tabs; count++) {
        current_tab = input[count+2];
        if (current_tab === "Facebook")
            salary -= 150;
        else if (current_tab === "Instagram")
            salary -= 100;
        else if (current_tab === "Reddit")
            salary -= 50;
        if (salary <= 0) {
            console.log("You have lost your salary.");
            break;
        }
    }
    if (salary > 0)
        console.log(Math.floor(salary));  
}

// salary (["10",
// "750",
// "Facebook",
// "Dev.bg",
// "Instagram",
// "Facebook",
// "Reddit",
// "Facebook",
// "Facebook"])



