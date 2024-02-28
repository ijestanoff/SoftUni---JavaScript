window.addEventListener('load', loadStudents);

const url = 'http://localhost:3030/jsonstore/collections/students';
document.querySelector('#form').addEventListener('submit', submitHandler);
const firstNameRef = document.querySelector('input[name="firstName"]');
const lastNameRef = document.querySelector('input[name="lastName"]');
const facultyNumberRef = document.querySelector('input[name="facultyNumber"]');
const gradeRef = document.querySelector('input[name="grade"]');
const tbodyRef = document.querySelector('tbody');

async function loadStudents() {
    tbodyRef.innerHTML = '';
    let inner;
    const requestAll = await fetch(url);
    if (requestAll.statusText != 'OK') {
        return;
    }
    const data = await requestAll.json();

    Object.values(data).forEach(item => {
        let g = Number(item.grade).toFixed(2);
        inner = '<tr>';
        inner += `<td>${item.firstName}</td>`;
        inner += `<td>${item.lastName}</td>`;
        inner += `<td>${item.facultyNumber}</td>`;
        inner += `<td>${g}</td>`;
        inner += '</tr>';
        tbodyRef.innerHTML += inner;
    });

}

async function submitHandler(e) {
    e.preventDefault();
    const first = firstNameRef.value;
    const last = lastNameRef.value;
    const faculty = facultyNumberRef.value;
    const grade = gradeRef.value;

    if (typeof (first) != 'string' || first.length == 0 ||
        typeof (last) != 'string' || last.length == 0 ||
        isNaN(faculty) || faculty.length == 0 ||
        isNaN(grade) || grade.length == 0) {
        return;
    }

    const request = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            'firstName': first,
            'lastName': last,
            'facultyNumber': faculty,
            'grade': grade
        })
    });
    if (request.statusText != 'OK') {
        return;
    }
    const dataStudent = await request.json();
    firstNameRef.value = '';
    lastNameRef.value = '';
    facultyNumberRef.value = '';
    gradeRef.value = '';
    loadStudents();
}
