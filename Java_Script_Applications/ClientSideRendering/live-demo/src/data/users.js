import { visit } from '../nav.js';
import { clearUserData, getUserData } from '../util.js';
import { get, post } from './request.js';

const host = 'http://localhost:3030/users';

export async function register(email, password) {
    return post(host + '/register', { email, password });
}

export async function login(email, password) {
    return post(host + '/login', { email, password });
}

export async function logout() {
    if (getUserData()) {
        await get(host + '/logout');
        clearUserData();
    }
    visit('home');
}