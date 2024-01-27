function sumTable() {
    const table = document.getElementsByTagName('tr');
    let total = 0;
    for (let i = 1; i<table.length-1; i++) {
        let row = table[i].children;
        total += Number(row[row.length-1].textContent);
    }
    document.getElementById('sum').textContent = total;
}