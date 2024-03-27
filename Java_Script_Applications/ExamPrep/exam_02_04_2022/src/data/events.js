import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    details: '/data/pets/',
    likeItem: '/data/donation',
    getLikes: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    getUserLikes: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(name, breed, age, weight, image) {
    return post(endpoints.create, { name, breed, age, weight, image });
}

export async function editItem(id, name, breed, age, weight, image) {
    return put(endpoints.details + id, { name, breed, age, weight, image });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(petId) {
    return post(endpoints.likeItem, { petId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
