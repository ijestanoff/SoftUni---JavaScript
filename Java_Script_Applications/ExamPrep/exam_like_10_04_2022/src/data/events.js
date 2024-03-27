import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    details: '/data/posts/',
    myPost: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likeItem: '/data/donations',
    getLikes: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    getUserLikes: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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

export async function createItem(title, description, imageUrl, address, phone) {
    return post(endpoints.create, { title, description, imageUrl, address, phone });
}

export async function editItem(id, title, description, imageUrl, address, phone) {
    return put(endpoints.details + id, { title, description, imageUrl, address, phone });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(postId) {
    return post(endpoints.likeItem, { postId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
