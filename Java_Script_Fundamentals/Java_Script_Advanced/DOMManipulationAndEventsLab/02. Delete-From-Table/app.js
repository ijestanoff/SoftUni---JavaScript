function deleteByEmail() {
    const input = document.querySelector('input[type="text"][name="email"]');
    const table = document.querySelectorAll('tbody tr');
    const result = document.getElementById('result');

    for (let row of table) {
        if (row.children[1].textContent == input.value) {
            row.remove();
            input.value = '';
            result.textContent = 'Deleted.';
        } else {
            result.textContent = 'Not found.';
        }
    }
}