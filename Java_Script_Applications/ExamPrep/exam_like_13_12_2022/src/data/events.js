import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    details: '/data/products/',
    likeItem: '/data/bought',
    getLikes: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    getUserLikes: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

//name,imageUrl, category, description, price

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function createItem(name, imageUrl, category, description, price) {
    return post(endpoints.create, { name, imageUrl, category, description, price });
}

export async function editItem(id, name, imageUrl, category, description, price) {
    return put(endpoints.details + id, { name, imageUrl, category, description, price });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(productId) {
    return post(endpoints.likeItem, { productId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(itemId, userId) {
    return get(endpoints.getUserLikes(itemId, userId));
}
