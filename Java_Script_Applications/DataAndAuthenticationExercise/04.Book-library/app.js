const url = 'http://localhost:3030/jsonstore/collections/books/';
document.querySelector('#loadBooks').addEventListener('click', loadBooksHandler);
const titleRef = document.querySelector('input[name="title"]');
const authorRef = document.querySelector('input[name="author"]');
const formRef = document.querySelector('form');
const tbodyRef = document.querySelector('tbody');
const formNameRef = document.querySelector('form h3');
const formButtonRef = document.querySelector('form button');

window.addEventListener('load', loadBooksHandler);
formRef.addEventListener('submit', submitHandler);

async function loadBooksHandler() {
    const request = await fetch(url);
    const booksData = await request.json();
    tbodyRef.innerHTML = '';
    Object.entries(booksData).forEach(([id, item]) => createRow(id, item));
    tbodyRef.querySelectorAll('button').forEach(button => button.addEventListener('click', tbodyButtonHandler));
}

function tbodyButtonHandler(e) {
    if (e.target.textContent == 'Edit') {
        const rowData = e.target.parentElement.parentElement.children;
        editBook(e.target.id, rowData[0].textContent, rowData[1].textContent);
    } else {
        deleteBook(e.target.id);
    }
}

function editBook(id, title, author) {
    titleRef.value = title;
    authorRef.value = author;

    formNameRef.textContent = 'Edit FORM';
    formButtonRef.textContent = 'Save';
    formRef.removeEventListener('submit', submitHandler);
    formRef.addEventListener('submit', (event) => saveHandler(id, event));
}

async function saveHandler(id, e) {
    e.preventDefault();
    if (!titleRef.value || !authorRef.value) {
        return;
    }
    const request = await fetch(url + id, {
        method: 'put',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 'author': authorRef.value, 'title': titleRef.value })
    });
    const booksData = await request.json();
    formNameRef.textContent = 'FORM';
    formButtonRef.textContent = 'Submit';
    formRef.removeEventListener('submit', (event) => saveHandler(id, event));
    formRef.addEventListener('submit', submitHandler);
    titleRef.value = '';
    authorRef.value = '';
    loadBooksHandler();
}

async function deleteBook(id) {
    const request = await fetch(url + id, {
        method: 'delete',
        headers: { 'Content-type': 'application/json' },
        body: {}
    });
    const booksData = await request.json();
    loadBooksHandler();
}

async function submitHandler(e) {
    e.preventDefault();
    if (!titleRef.value || !authorRef.value) {
        return;
    }
    const request = await fetch(url, {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ 'author': authorRef.value, 'title': titleRef.value })
    });
    const booksData = await request.json();
    titleRef.value = '';
    authorRef.value = '';
    loadBooksHandler();
}

function createRow(id, data) {
    let inner = '<tr>';
    inner += `<td>${data.title}</td>`;
    inner += `<td>${data.author}</td>`;
    inner += '<td>';
    inner += `<button id=${id}>Edit</button>`;
    inner += `<button id=${id}>Delete</button>`;
    inner += '</td></tr>';
    tbodyRef.innerHTML += inner;
}

