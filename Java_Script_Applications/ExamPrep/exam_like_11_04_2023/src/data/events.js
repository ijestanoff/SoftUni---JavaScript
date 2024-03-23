import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/events?sortBy=_createdOn%20desc',
    create: '/data/events',
    details: '/data/events/',
    likeItem: '/data/going',
    getLikes: (eventId) => `/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`,
    getUserLikes: (itemId, userId) => `/data/going?where=eventId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

//name,imageUrl, category,description, date

export async function createItem(name, imageUrl, category, description, date) {
    return post(endpoints.create, { name, imageUrl, category, description, date });
}

export async function editItem(id, name, imageUrl, category, description, date) {
    return put(endpoints.details + id, { name, imageUrl, category, description, date });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(eventId) {
    return post(endpoints.likeItem, { eventId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
