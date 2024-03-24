import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="add-movie" class="view-section">
    <form @submit=${createSubmitHandler(onCreate)} id="add-movie-form" class="text-center border border-light p-5" action="#" >
        <h1>Add Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input id="title" type="text" class="form-control" placeholder="Title" name="title" />
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Description" name="description" ></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input id="imageUrl" type="text" class="form-control" placeholder="Image Url" name="img" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

async function onCreate({title, description, img}) {
    if (!title || !img || !description ) {
        return alert('All fields are required!');
    }
    await createItem(title, description, img);

    page.redirect('/catalog');
}