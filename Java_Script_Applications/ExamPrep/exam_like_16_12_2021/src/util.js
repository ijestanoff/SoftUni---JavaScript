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
        document.querySelector('#profileId').style.display = 'inline-block';
        document.querySelector('#createId').style.display = 'inline-block';
        document.querySelector('#logoutId').style.display = 'inline-block';
        document.querySelector('#loginId').style.display = 'none';
        document.querySelector('#registerId').style.display = 'none';
    } else {
        document.querySelector('#profileId').style.display = 'none';
        document.querySelector('#createId').style.display = 'none';
        document.querySelector('#logoutId').style.display = 'none';
        document.querySelector('#loginId').style.display = 'inline-block';
        document.querySelector('#registerId').style.display = 'inline-block';
    }
}