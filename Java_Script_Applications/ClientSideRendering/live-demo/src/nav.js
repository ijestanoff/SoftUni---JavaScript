import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';
import { showCreate } from './views/create.js';
import { getUserData } from './util.js';
import { logout } from './data/users.js';

export function onNavigate(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        visit(event.target.id);
    }
}

const views = {
    'home': showHome,
    'register': showRegister,
    'details': showDetails,
    'login': showLogin,
    'create': showCreate,
    'logout': logout
};

export function visit(link, param) {
    const view = views[link];
    view(param);
}

export function guestUser() {
    const guest = document.querySelector('#guest');
    if (getUserData()) {
        guest.textContent = `Welcome ${getUserData().email}`;
    } else {
        guest.textContent = 'Welcome guest';
    }
}