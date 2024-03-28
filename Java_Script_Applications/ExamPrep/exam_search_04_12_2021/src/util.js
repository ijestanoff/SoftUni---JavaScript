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

/*<li id="loginId"><a href="/login">Login</a></li>
                    <li id="registerId"><a href="/register">Register</a></li>
                    <!--Only user-->
                    <li id="createId"><a href="/create">Create Album</a></li>
                    <li id="logoutId"><a href="javascript:void(0)" id="logoutBtn">Logout</a></li>*/
export function updateNav() {
    const userData = getUserData();
    if (userData) {
        document.querySelector('#createId').style.display = 'inline-block';
        document.querySelector('#logoutId').style.display = 'inline-block';
        document.querySelector('#loginId').style.display = 'none';
        document.querySelector('#registerId').style.display = 'none';
    } else {
        document.querySelector('#createId').style.display = 'none';
        document.querySelector('#logoutId').style.display = 'none';
        document.querySelector('#loginId').style.display = 'inline-block';
        document.querySelector('#registerId').style.display = 'inline-block';
    }
}