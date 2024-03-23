import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/facts?sortBy=_createdOn%20desc',
    create: '/data/facts',
    details: '/data/facts/',
    likeFact: '/data/likes',
    getLikes: (factId) => `/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`,
    getUserLikes: (factId, userId) => `/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllFacts() {
    return get(endpoints.dashboard);
}

export async function getFactsById(id) {
    return get(endpoints.details + id);
}

export async function createFact(category, imageUrl, description, moreInfo) {
    return post(endpoints.create, { category, imageUrl, description, moreInfo });
}

export async function editFact(id, category, imageUrl, description, moreInfo) {
    return put(endpoints.details + id, { category, imageUrl, description, moreInfo });
}

export async function deleteFact(id) {
    return del(endpoints.details + id);
}

export async function likeFact(factId) {
    return post(endpoints.likeFact, { factId });
}

export async function getLikes(factId) {
    return get(endpoints.getLikes(factId));
}

export async function getUserLikes(factId, userId) {
    return get(endpoints.getUserLikes(factId, userId));
}
