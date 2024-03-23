import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/memes?sortBy=_createdOn%20desc',
    create: '/data/memes',
    details: '/data/memes/',
    searchApi: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemById(id) {
    return get(endpoints.details + id);
}

export async function searchItems(userId) {
    return get(endpoints.searchApi(userId));
}

export async function createItem(title, description, imageUrl) {
    return post(endpoints.create, { title, description, imageUrl });
}

export async function editItem(id, title, description, imageUrl) {
    return put(endpoints.details + id, { title, description, imageUrl });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}