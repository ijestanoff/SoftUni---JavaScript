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
        document.querySelector('#welcome').textContent = `Welcome ${userData.username}`;
        document.querySelector('#guest').style.display = 'none';
        document.querySelector('#profile').style.display = 'block';
        document.querySelector('#welcome').style.display = 'block';
    } else {
        document.querySelector('#guest').style.display = 'block';
        document.querySelector('#profile').style.display = 'none';
        document.querySelector('#welcome').style.display = 'none';
    }
}