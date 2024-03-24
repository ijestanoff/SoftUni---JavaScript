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
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#user').style.display = 'block';
        document.querySelector('#user span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector('#guest').style.display = 'block';
        document.querySelector('#user').style.display = 'none';
    }
}

export function parseQuery(query) {
    if (!query) {
        return {};
    }
    return Object.fromEntries(query
        .split('&')
        .map(prop => prop.split('=')));
}