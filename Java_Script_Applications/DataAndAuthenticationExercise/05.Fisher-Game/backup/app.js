const userNavRef = document.querySelector('#user');
const guestNavRef = document.querySelector('#guest');
document.querySelector('a[id="logout"]').addEventListener('click', logout);
document.querySelector('a[id=home]').classList.add('active');
const guestRef = document.querySelector('span');
document.querySelector('button[class="load"]').addEventListener('click', onLoadCatch);
const addBtnRef = document.querySelector('.add');
const catchesRef = document.querySelector('#catches');
const addFormRef = document.querySelector('#addForm');
addFormRef.addEventListener('submit', onCreate);

catchesRef.innerHTML = '';
const homeView = document.querySelector('section[id="home-view"]');
const fieldsetRef = document.querySelector('fieldset[id="main"]');
//fieldsetRef.style.display = 'none';

const endpoints = {
    logout: 'http://localhost:3030/users/logout',
    caches: 'http://localhost:3030/data/catches/'
};

let userData = JSON.parse(sessionStorage.getItem('userData'));
updateNav();

function updateNav() {
    if (userData) {
        userNavRef.style.display = 'inline-block';
        guestNavRef.style.display = 'none';
        guestRef.textContent = userData.email;
        addBtnRef.disabled = false;
        onLoadCatch();
    } else {
        userNavRef.style.display = 'none';
        guestNavRef.style.display = 'inline-block';
        guestRef.textContent = 'guest';
        addBtnRef.disabled = true;
    }
    
}

async function logout(e) {
    const option = {
        method: 'get',
        headers: {
            'X-Authorization': userData.accessToken
        }
    };
    const request = await fetch(endpoints.logout, option);
    sessionStorage.clear();
    onLoadCatch();
    userData = null;
    updateNav();
}

async function onLoadCatch(e) {
    fieldsetRef.style.display = 'inline-block';
    catchesRef.innerHTML = '';

    // const fieldset = document.createElement('fieldset');
    // fieldset.id = 'main';
    // homeView.appendChild(fieldset);
    // const legend = document.createElement('legend');
    // legend.textContent = 'Catches';

    const response = await fetch(endpoints.caches);
    const data = await response.json();
    //data.forEach(x => listAllCatches(x));
    data.forEach(x => catchesRef.appendChild(createCatch(x)));
    //catchesRef.appendChild(div);
}

function listAllCatches(x) {
    const div = document.createElement('div');
    const isOwner = x._ownerId == userData?._id;
    div.classList.add('catch');
    div.innerHTML = '<label>Angler</label>';
    div.innerHTML += `<input type="text" class="angler" value="${x.angler}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += '<label>Weight</label>';
    div.innerHTML += `<input type="text" class="weight" value="${x.weight}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += '<label>Species</label>';
    div.innerHTML += `<input type="text" class="species" value="${x.species}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += '<label>Location</label>';
    div.innerHTML += `<input type="text" class="location" value="${x.location}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += '<label>Bait</label>';
    div.innerHTML += `<input type="text" class="bait" value="${x.bait}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += '<label>Capture Time</label>';
    div.innerHTML += `<input type="number" class="captureTime" value="${x.captureTime}" ${isOwner ? '' : 'disabled'}>`;
    div.innerHTML += `<button class="update" data-id="${x._id}" ${isOwner ? '' : 'disabled'}>Update</button>`;
    div.innerHTML += `<button class="delete" data-id="${x._id}" ${isOwner ? '' : 'disabled'}>Delete</button>`;
    catchesRef.appendChild(div);
    const buttons = div.querySelectorAll('button');

    if (isOwner) {
        buttons[0].addEventListener('click', onUpdate);
        buttons[1].addEventListener('click', onDelete);
    }
}

async function onDelete(data, e) {
    //const id = e.target.dataset.id;
    const id = e.target.id;
    const option = createOption('delete', '');
    await fetch(endpoints.caches + id, option);
    onLoadCatch();
}

async function onUpdate(data, e) {
    //const id = e.target.dataset.id;
    const id = e.target.id;
    const editData = e.target.parentElement.children;
    const angler = editData[1].value;
    const weight = editData[3].value;
    const species = editData[5].value;
    const location = editData[7].value;
    const bait = editData[9].value;
    const captureTime = editData[11].value;
    //debugger
    // if (data._ownerId !== id) {
    //     return alert('Unauthorized action.');
    // }
    const option = createOption('put', { angler, weight, species, location, bait, captureTime });
    await fetch(endpoints.caches + id, option);
    onLoadCatch();
}

async function onCreate(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { angler, weight, species, location, bait, captureTime } = Object.fromEntries(formData.entries());
    let _ownerId = userData._id;

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }

    const option = createOption('post', { angler, weight, species, location, bait, captureTime, _ownerId });
    const respond = await fetch(endpoints.caches, option);
    e.target.reset();
    onLoadCatch();
}

function createOption(method, data) {
    return {
        method,
        headers: {
            'Content-type': 'application/json',
            'X-Authorization': userData.accessToken
        },
        body: JSON.stringify(data)
    };
}

function createCatch(data) {
    const isDisabled = (userData && data._ownerId == userData._id) ? false : true;
    const catches = createElement('div', { class: 'catch' },
        createElement('label', {}, 'Angler'),
        createElement('input', { type: 'text', class: 'angler', value: data.angler, disabled: isDisabled }),
        createElement('label', {}, 'Weight'),
        createElement('input', { type: 'text', class: 'weight', value: data.weight, disabled: isDisabled }),
        createElement('label', {}, 'Species'),
        createElement('input', { type: 'text', class: 'species', value: data.species, disabled: isDisabled }),
        createElement('label', {}, 'Location'),
        createElement('input', { type: 'text', class: 'location', value: data.location, disabled: isDisabled }),
        createElement('label', {}, 'Bait'),
        createElement('input', { type: 'text', class: 'bait', value: data.bait, disabled: isDisabled }),
        createElement('label', {}, 'Capture Time'),
        createElement('input', { type: 'text', class: 'captureTime', value: data.captureTime, disabled: isDisabled }),
        //createElement('button', { class: 'update', id: data._id, disabled: isDisabled }, 'Update'),
        //createElement('button', { class: 'delete', id: data._id, disabled: isDisabled }, 'Delete')
        createElement('button', { class: 'update', disabled: isDisabled, id: data._id }, 'Update'),
        createElement('button', { class: 'delete', disabled: isDisabled, id: data._id }, 'Delete')


    );
    const buttons = catches.querySelectorAll('button');
    if (!isDisabled) {

        //buttons[0].addEventListener('click', onUpdate);
        buttons[0].addEventListener('click', (e) => onUpdate(data, e));
        //buttons[1].addEventListener('click', onDelete);
        buttons[1].addEventListener('click', (e) => onDelete(data, e));
    }

    return catches;
}

function createElement(type, attr, ...content) {
    const element = document.createElement(type);
    for (const item in attr) {
        if (item == 'class') {
            element.classList.add(attr[item]);
        } else if (item == 'disabled') {
            element.disabled = attr[item];
        } else {
            element[item] = attr[item];
        }
    }

    for (let item of content) {
        if (typeof item == 'string' || typeof item == 'number') {
            item = document.createTextNode(item);
        }
        element.appendChild(item);
    }
    return element;
}