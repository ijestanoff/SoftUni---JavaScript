import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    details: '/data/fruits/',
    searchApi: (search) => `/data/fruits?where=name%20LIKE%20%22${search}%22`
};

export async function getAllFruits() {
    return get(endpoints.dashboard);
}

export async function getFruitById(id) {
    return get(endpoints.details + id);
}

export async function searchItems(search){
    return get(endpoints.searchApi(search));
}

export async function createFruit(name, imageUrl, description, nutrition) {
    return post(endpoints.create, { name, imageUrl, description, nutrition });
}

export async function editFruit(id,name, imageUrl, description, nutrition) {
    return put(endpoints.details + id, { name, imageUrl, description, nutrition });
}

export async function deleteFruit(id) {
    return del(endpoints.details + id);
}