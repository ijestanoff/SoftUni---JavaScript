import { post } from '../dat/request.js';
import { html, render, classMap } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler, getUserData } from '../util.js';

export function showCreate() {
    render(createTemplate({ errors: {} }));
}

const createTemplate = (data) => html`
    <!-- <label>
        Description:
        <input class=${classMap({ error: data.errors.description })} type="text" name="description">
    </label> -->
    
<section id="add-movie" class="view-section">
    <form @submit=${createSubmitHandler(onSubmit)} id="add-movie-form" class="text-center border border-light p-5" action="#" method="">
    <h1>Add Movie</h1>
    <div class="form-group">
        <label for="title">Movie Title</label>
        <input id="title" type="text" class="form-control" placeholder="Title" name="title" value="" />
    </div>
    <div class="form-group">
        <label for="description">Movie Description</label>
        <textarea class="form-control" placeholder="Description" name="description"></textarea>
    </div>
    <div class="form-group">
        <label for="imageUrl">Image url</label>
        <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" value="" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
`;

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

    visit('Movies');
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
