function leapYear (year) {
    is_leap = false;
    if (year % 400 == 0) is_leap = true;
    else if (year % 100 == 0) is_leap = false;
    else if (year % 4 == 0) is_leap = true;

    if (is_leap) console.log("yes");
    else console.log("no"); 
}

leapYear (1984);
leapYear (2003);
leapYear (2000);
leapYear (4);