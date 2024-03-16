function attachEvents() {
    const phonebookUrl = 'http://localhost:3030/jsonstore/phonebook/';
    document.querySelector('#btnLoad').addEventListener('click', loadHandler);
    document.querySelector('#btnCreate').addEventListener('click', createHandler);
    const personRef = document.querySelector('#person');
    const phoneRef = document.querySelector('#phone');
    const phonebookRef = document.querySelector('#phonebook');

    async function loadHandler() {
        phonebookRef.innerHTML = '';
        const request = await fetch(phonebookUrl);
        const data = await request.json();
        Object.values(data).forEach(item => {
            let li = document.createElement('li');
            li.textContent = `${item.person}: ${item.phone}`;
            li.id = item._id;
            let button = document.createElement('button');
            button.textContent = 'Delete';
            button.addEventListener('click', deleteHandler);
            li.appendChild(button);
            phonebookRef.appendChild(li);
        });
    }

    async function createHandler() {
        await fetch(phonebookUrl, {
            method: 'post',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({'person': personRef.value, 'phone': phoneRef.value})
        });
        personRef.value = '';
        phoneRef.value = '';
        loadHandler();
    }

    async function deleteHandler(e) {
        const id = e.target.parentElement.id;
        const request = await fetch(phonebookUrl + id, {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: ''
        });
        const data = await request.json();
        if (data._id == id) {
            e.target.parentElement.remove();
        }
    }
}

attachEvents();