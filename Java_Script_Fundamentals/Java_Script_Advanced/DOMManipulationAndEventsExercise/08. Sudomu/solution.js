function solve() {
    const inputRef = document.querySelectorAll('tbody td input');
    const buttonRef = document.querySelectorAll('button');
    const tableRef = document.querySelector('table');
    const checkRef = document.getElementById('check');

    buttonRef[0].addEventListener('click', quickChecker);
    buttonRef[1].addEventListener('click', clearHandler);

    function quickChecker() {
        let n = Array.from(inputRef).map(x => Number(x.value));
        if (n[0] + n[1] + n[2] == 6 && n[3] + n[4] + n[5] == 6 && n[6] + n[7] + n[8] == 6 && n[0] + n[3] + n[6] == 6 && n[1] + n[4] + n[7] == 6 && n[2] + n[5] + n[8] == 6) {
            tableRef.style.border = '2px solid green';
            checkRef.children[0].textContent = 'You solve it! Congratulations!';
            checkRef.children[0].style.color = 'green';
        } else {
            tableRef.style.border = '2px solid red';
            checkRef.children[0].textContent = 'NOP! You are not done yet...';
            checkRef.children[0].style.color = 'red';
        }
    }

    function clearHandler() {
        for (let i = 0; i < 9; i++) {
            inputRef[i].value = '';
        }
        tableRef.style.border = '';
        checkRef.children[0].textContent = '';
    }
}