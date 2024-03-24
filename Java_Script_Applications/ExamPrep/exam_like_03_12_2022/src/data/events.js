import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    details: '/data/albums/',
    likeItem: '/data/likes',
    getLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    getUserLikes: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

//singer, album, imageUrl, release, label, sales

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(singer, album, imageUrl, release, label, sales) {
    return post(endpoints.create, { singer, album, imageUrl, release, label, sales });
}

export async function editItem(id, singer, album, imageUrl, release, label, sales) {
    return put(endpoints.details + id, { singer, album, imageUrl, release, label, sales });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(albumId) {
    return post(endpoints.likeItem, { albumId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
