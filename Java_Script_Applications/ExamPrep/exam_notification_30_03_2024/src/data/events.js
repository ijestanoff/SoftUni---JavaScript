import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/cyberpunk?sortBy=_createdOn%20desc',
    create: '/data/cyberpunk',
    details: '/data/cyberpunk/',
    searchApi: (search) => `/data/fruits?where=name%20LIKE%20%22${search}%22`
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

export async function createItem(item, imageUrl, price, availability, type, description) {
    return post(endpoints.create, { item, imageUrl, price, availability, type, description });
}

export async function editItem(id,item, imageUrl, price, availability, type, description) {
    return put(endpoints.details + id, {item, imageUrl, price, availability, type, description });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}