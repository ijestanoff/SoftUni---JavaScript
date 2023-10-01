function chessBoard (num) {
    console.log('<div class="chessboard">');
    let color = 'white';
    let slave_color = '';
    for (count = 1; count <= num; count++) {
        if (color == 'white') color = 'black';
        else color = 'white';
        console.log('  <div>');
            slave_color = color;
            for (cnt = 1; cnt <=num; cnt++) {
                console.log(`    <span class="${slave_color}"></span>`);
                if (slave_color == 'white') slave_color = 'black';
                else slave_color = 'white';
            }
        console.log('  </div>');
    }
    console.log('</div>');
}

chessBoard (6);