import { editItem, getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotification } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    render(editTemplate(item));
}

const editTemplate = (item) => html`
<section id="edit-meme">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${item.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description" .value=${item.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${item.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

async function onEdit({ title, description, imageUrl }, event) {
    if (!title || !imageUrl || !description ) {
        showNotification('All fields required!');
        return; 
    }
    const id = event.dataset.id;
    await editItem(id, title, description, imageUrl);
    page.redirect(`/catalog/${id}`);
}