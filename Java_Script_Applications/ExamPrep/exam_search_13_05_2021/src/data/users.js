import { clearUserData, saveUserData } from '../util.js';
import { get, post } from './request.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export async function login(username, password) {
    const result = await post(endpoints.login, { username, password });
    saveUserData(result);
}

export async function register(username, password) {
    const result = await post(endpoints.register, { username, password });
    saveUserData(result);
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();
    await promise;
}