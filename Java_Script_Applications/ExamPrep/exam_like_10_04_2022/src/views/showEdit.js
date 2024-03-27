import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) =>html`
<section id="edit-page" class="auth">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} id="edit">
        <h1 class="title">Edit Post</h1>

        <article class="input-group">
            <label for="title">Post Title</label>
            <input type="title" name="title" id="title" .value = ${item.title}>
        </article>

        <article class="input-group">
            <label for="description">Description of the needs </label>
            <input type="text" name="description" id="description" .value = ${item.description}>
        </article>

        <article class="input-group">
            <label for="imageUrl"> Needed materials image </label>
            <input type="text" name="imageUrl" id="imageUrl" .value = ${item.imageUrl}>
        </article>

        <article class="input-group">
            <label for="address">Address of the orphanage</label>
            <input type="text" name="address" id="address" .value = ${item.address}>
        </article>

        <article class="input-group">
            <label for="phone">Phone number of orphanage employee</label>
            <input type="text" name="phone" id="phone" .value = ${item.phone}>
        </article>

        <input type="submit" class="btn submit" value="Edit Post">
    </form>
</section>`;

async function onEdit({title, description, imageUrl, address, phone}, event) {
    
    if (!title || !imageUrl || !description || !address || !phone ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, title, description, imageUrl, address, phone);
    page.redirect(`/catalog/${id}`);
}