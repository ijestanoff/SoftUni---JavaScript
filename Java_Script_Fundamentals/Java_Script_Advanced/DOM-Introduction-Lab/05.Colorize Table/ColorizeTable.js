function colorize() {
    let table = document.getElementsByTagName('tr');
    for (let index=1; index < table.length; index+=2) {
        table[index].style.background = 'teal';
    }
}