function spiceMustFlow (yield) {
    let days = 0;
    let total = 0;
    while (yield>=100) {
        total += yield;
        if (total > 26) total -= 26;
        else total = 0;
        yield -= 10;
        days++;
    }
    if (total > 26) total -= 26;
    else total = 0;
    console.log(days);
    console.log(total);
}

spiceMustFlow (111);
spiceMustFlow (450);