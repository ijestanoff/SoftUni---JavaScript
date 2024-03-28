import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/theaters?sortBy=_createdOn%20desc&distinct=title',
    create: '/data/theaters',
    details: '/data/theaters/',
    myPost: (userId) => `/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likeItem: '/data/likes',
    getLikes: (theaterId) => `/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`,
    getUserLikes: (theaterId, userId) => `/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function getMyPost(userId){
    return get(endpoints.myPost(userId));
}

export async function createItem(title, date, author, imageUrl, description) {
    return post(endpoints.create, { title, date, author, imageUrl, description });
}

export async function editItem(id, title, date, author, imageUrl, description) {
    return put(endpoints.details + id, { title, date, author, imageUrl, description });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(theaterId) {
    return post(endpoints.likeItem, { theaterId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
