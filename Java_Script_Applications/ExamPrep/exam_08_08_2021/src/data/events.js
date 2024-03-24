import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/books?sortBy=_createdOn%20desc',
    create: '/data/books',
    details: '/data/books/',
    myBook: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    likeItem: '/data/likes',
    getLikes: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    getUserLikes: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

//title, description, imageUrl, type

export async function getAllItems() {
    return get(endpoints.dashboard);
}

export async function getItemsById(id) {
    return get(endpoints.details + id);
}

export async function getMyBooks(userId){
    return await get(endpoints.myBook(userId));
} 

export async function createItem(title, description, imageUrl, type) {
    return post(endpoints.create, { title, description, imageUrl, type });
}

export async function editItem(id, title, description, imageUrl, type) {
    return put(endpoints.details + id, { title, description, imageUrl, type });
}

export async function deleteItem(id) {
    return del(endpoints.details + id);
}

export async function likeItem(bookId) {
    return post(endpoints.likeItem, { bookId }); //!!! Look for same key !!!
}

export async function getLikes(itemId) {
    return get(endpoints.getLikes(itemId));
}

export async function getUserLikes(bookId, userId) {
    return get(endpoints.getUserLikes(bookId, userId));
}
