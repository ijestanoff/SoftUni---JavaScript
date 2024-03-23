import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/motorcycles?sortBy=_createdOn%20desc',
    create: '/data/motorcycles',
    details: '/data/motorcycles/'
};

export async function getAllMotorcycles() {
    return get(endpoints.dashboard);
}

export async function getMotorcycleById(id) {
    return get(endpoints.details + id);
}
//model,imageUrl, year, mileage,contact,about

export async function createMotorcycle(model, imageUrl, year, mileage, contact, about) {
    return post(endpoints.create, { model, imageUrl, year, mileage, contact, about });
}

export async function editMotorcycles(id, model, imageUrl, year, mileage, contact, about) {
    return put(endpoints.details + id, { model, imageUrl, year, mileage, contact, about });
}

export async function deleteMotorcycle(id) {
    return del(endpoints.details + id);
}