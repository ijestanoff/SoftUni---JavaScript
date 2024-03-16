import { post } from '../data/request.js';
import { html, render, classMap } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, getUserData } from '../util.js';

export function showCreate() {
    render(createTemplate({ errors: {} }));
}

const createTemplate = (data) => html`
<h1>Create Movie</h1>
<form @submit=${createSubmitHandler(onSubmit)}>
    <label>
        Title:
        <input class=${classMap({ error: data.errors.title })} type="text" name="title">
    </label>
    <label>
        Image URL:
        <input class=${classMap({ error: data.errors.img })} type="text" name="img">
    </label>
    <label>
        Description:
        <input class=${classMap({ error: data.errors.description })} type="text" name="description">
    </label>
    <input type="submit" value="Publish">
</form>`;

async function onSubmit({ title, img, description }) {
    const data = {
        title,
        img,
        description,
        errors: {
            title: false,
            img: false,
            description: false
        }
    };
    if (!title) {
        data.errors.title = true;
    }
    if (!img) {
        data.errors.img = true;
    }
    if (!description) {
        data.errors.description = true;
    }
    if (!title || !img || !description) {
        render(createTemplate(data));
        return alert('All fields are required!');
    }

    await create(title, img, description);

    visit('home');
}

async function create(title, img, description) {
    const userData = getUserData();

    if (!userData) {
        alert('You must be logged to the publish movies!');
        return;
    }
    const url = 'http://localhost:3030/data/movies';
    await post(url, { title, img, description });
}
