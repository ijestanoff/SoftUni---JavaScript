import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/shoes?sortBy=_createdOn%20desc',
    create: '/data/shoes',
    details: '/data/shoes/',
    searchApi: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemById(id) {
    return get(endpoints.details + id);
}

export async function searchItems(search){
    return get(endpoints.searchApi(search));
}

export async function createItem(brand, model, imageUrl, release, designer, value) {
    return post(endpoints.create, { brand, model, imageUrl, release, designer, value });
}

export async function editItem(id,brand, model, imageUrl, release, designer, value) {
    return put(endpoints.details + id, { brand, model, imageUrl, release, designer, value });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}