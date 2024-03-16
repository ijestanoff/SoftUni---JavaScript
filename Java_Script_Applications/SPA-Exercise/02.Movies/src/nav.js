import { showDetails } from './views/details.js';
import { showHome } from './views/home.js';
import { showRegister } from './views/register.js';
import { showLogin } from './views/login.js';
import { showCreate } from './views/create.js';
import { logout } from './dat/users.js';
import { showEdit } from './views/edit.js';

export function onNavigate(event) {
    if (event.target.tagName == 'A') {
        event.preventDefault();
        visit(event.target.textContent);
    }
}

const views = {
    'Movies': showHome,
    'Register': showRegister,
    'Details': showDetails,
    'Login': showLogin,
    'Create': showCreate,
    'Edit': showEdit,
    'Logout': logout
};

export function visit(link, param) {
    const view = views[link];
    view(param);
}
