const url = 'http://localhost:3030/jsonstore/collections/students';
const formRef = document.querySelector('#form');
const tbodyRef = document.querySelector('tbody');
window.addEventListener('load', loadStudents);
formRef.addEventListener('submit', submitHandler);

async function loadStudents() {
    tbodyRef.innerHTML = '';
    const requestAll = await fetch(url);
    const data = await requestAll.json();
    Object.values(data).forEach(item => {
        let inner = '<tr>';
        inner += `<td>${item.firstName}</td>`;
        inner += `<td>${item.lastName}</td>`;
        inner += `<td>${item.facultyNumber}</td>`;
        inner += `<td>${Number(item.grade).toFixed(2)}</td>`;
        tbodyRef.innerHTML += inner + '</tr>';
    });
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { firstName, lastName, facultyNumber, grade } = Object.fromEntries(formData.entries());

    if (!firstName || !lastName || !facultyNumber || !grade) {
        return;
    }

    await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    });
    formRef.reset();
    loadStudents();
}
