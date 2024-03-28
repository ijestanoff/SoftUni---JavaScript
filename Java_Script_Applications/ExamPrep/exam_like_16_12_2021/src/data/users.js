import { clearUserData, saveUserData } from '../util.js';
import { get, post } from './request.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    saveUserData(result);
}

export async function register(email, password) {
    const result = await post(endpoints.register, { email, password });
    saveUserData(result);
}

export async function logout() {
    const promise = get(endpoints.logout);
    clearUserData();
    await promise;
}