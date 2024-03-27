export function getUserData() {
    return JSON.parse(localStorage.getItem('user'));
}

export function saveUserData(data) {
    localStorage.setItem('user', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('user');
}

export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const entries = [...formData.entries()].map(([k, v]) => [k, v.trim()]);

        callback(Object.fromEntries(entries), event.target);
    };
}

export function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('#login').style.display = 'none';
        document.querySelector('#register').style.display = 'none';
        document.querySelector('#create').style.display = 'block';
        document.querySelector('#logout').style.display = 'block';
    } else {
        document.querySelector('#login').style.display = 'block';
        document.querySelector('#register').style.display = 'block';
        document.querySelector('#create').style.display = 'none';
        document.querySelector('#logout').style.display = 'none';
    }
}