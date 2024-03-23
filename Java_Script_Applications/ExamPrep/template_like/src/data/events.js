import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/facts?sortBy=_createdOn%20desc',
    create: '/data/facts',
    details: '/data/facts/',
    likeItem: '/data/likes',
    getLikes: (itemId) => `/data/likes?where=factId%3D%22${itemId}%22&distinct=_ownerId&count`,
    getUserLikes: (itemId, userId) => `/data/likes?where=factId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(category, imageUrl, description, moreInfo) {
    return post(endpoints.create, { category, imageUrl, description, moreInfo });
}

export async function editItem(id, category, imageUrl, description, moreInfo) {
    return put(endpoints.details + id, { category, imageUrl, description, moreInfo });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(factId) {
    return post(endpoints.likeItem, { factId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
