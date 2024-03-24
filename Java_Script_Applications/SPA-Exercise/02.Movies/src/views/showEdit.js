import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) =>html`
<section id="edit-movie" class="view-section">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input
                id="title"
                type="text"
                class="form-control"
                placeholder="Movie Title"
                name="title"
                .value = ${item.img}
            />
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea
                class="form-control"
                placeholder="Movie Description..."
                name="description"
                .value = ${item.title}
            ></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input
                id="imageUrl"
                type="text"
                class="form-control"
                placeholder="Image Url"
                name="img"
                .value = ${item.description}
            />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

async function onEdit({title, description, img}, event) {
    if (!title || !img || !description ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, title, description, img);
    page.redirect(`/catalog/${id}`);
}