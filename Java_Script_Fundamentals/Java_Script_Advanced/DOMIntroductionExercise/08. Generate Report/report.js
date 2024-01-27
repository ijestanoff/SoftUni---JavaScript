function generateReport() {
    const table = [];
    const head = {}
    const tableRef = document.querySelector('tbody');
    const rowObject = tableRef.querySelectorAll('tr');
    const outputRef = document.getElementById('output');

    const checks = document.querySelectorAll('th input[type="checkbox"]');
    for (let inx = 0; inx < checks.length; inx++) {
        head[checks[inx].name] = checks[inx].checked;
    }

    const length = Object.keys(head).length;
    for (let row = 0; row < rowObject.length; row++) {
        let colObject = {};
        for (let col = 0; col < length; col++) {
            colObject[col] = rowObject[row].children[col].textContent;
        }
        table.push(colObject);
    }

    let output = [];
    table.forEach(row => {
        let tuples = Object.values(row);
        let obj = {};
        Object.entries(head).forEach((check, inx) => {
            if (check[1]) {
                obj[check[0]] = tuples[inx];
            }
        });
        output.push(obj);
    });

    outputRef.textContent = JSON.stringify(output);
}