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
        document.querySelector('nav .guest').style.display = 'none';
        document.querySelector('nav .user').style.display = 'block';
        document.querySelector('#welcome-span').textContent = `Welcome, ${userData.email}`;
    } else {
        document.querySelector('nav .guest').style.display = 'block';
        document.querySelector('nav .user').style.display = 'none';
    }
}

export function showNotification(message) {
    const divRef = document.querySelector('#errorBox');
    divRef.style.display = 'block';
    divRef.querySelector('span').textContent = message;
    setTimeout(() => {
        divRef.style.display = 'none';
    }, 3000);
}