import { del, get, post, put } from './request.js';

const endpoints = {
    dashboard: '/data/cars?sortBy=_createdOn%20desc',
    create: '/data/cars',
    details: '/data/cars/'
};

export async function getAllCars() {
    return get(endpoints.dashboard);
}

export async function getCarById(id) {
    return get(endpoints.details + id);
}

export async function createCars(model, imageUrl, price, weight, speed, about) {
    return post(endpoints.create, { model, imageUrl, price, weight, speed, about });
}

export async function editCars(id, model, imageUrl, price, weight, speed, about) {
    return put(endpoints.details + id, { model, imageUrl, price, weight, speed, about });
}

export async function deleteCar(id){
    return del(endpoints.details + id);
}

