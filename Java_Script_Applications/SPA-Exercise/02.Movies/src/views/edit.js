import { put } from '../dat/request.js';
import { html, render } from '../lit.js';
import { visit } from '../nav.js';
import { createSubmitHandler } from '../util.js';

let movieGlobalId = null;

export async function showEdit(movie) {
    movieGlobalId = movie._id;
    render(editTemplate(movie));
}

const editTemplate = (movie) => html`
<section id="edit-movie" class="view-section">
    <form @submit=${createSubmitHandler(onEdit)} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Movie Title" value=${movie.img} name="title" />
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." value="" name="description" >${movie.title}</textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" value=${movie.description} name="img" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>
`;

async function onEdit({title, img, description}) {
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
        render(editTemplate(data));
        return alert('All fields are required!');
    }

    await edit(title, img, description);
    visit('Details', movieGlobalId);
}

async function edit(title, img, description) {
    const url = `http://localhost:3030/data/movies/${movieGlobalId}`;
    await put(url, { title, img, description });
}