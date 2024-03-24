import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/offers?sortBy=_createdOn%20desc',
    create: '/data/offers',
    details: '/data/offers/',
    likeItem: '/data/applications',
    getLikes: (offerId) => `/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`,
    getUserLikes: (offerId, userId) => `/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

//title,imageUrl, category, description, requirements, salary

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(title,imageUrl, category, description, requirements, salary) {
    return post(endpoints.create, { title,imageUrl, category, description, requirements, salary });
}

export async function editItem(id, title,imageUrl, category, description, requirements, salary) {
    return put(endpoints.details + id, { title,imageUrl, category, description, requirements, salary });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(offerId) {
    return post(endpoints.likeItem, { offerId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
