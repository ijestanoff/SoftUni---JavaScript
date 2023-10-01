function loadingBar (input) {
    let num = input / 10;
    let row = input + '% [';
    for (let count = 0; count<num; count++){
        row += '%';
    }
    for (let count = 0; count<10 - num; count++){
        row += '.'
    }
    row+=']'
    if (input<100) {
        console.log(row);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}

loadingBar (30);
loadingBar (50);
loadingBar (100);
