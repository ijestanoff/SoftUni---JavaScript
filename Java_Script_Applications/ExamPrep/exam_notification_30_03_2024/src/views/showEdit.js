import { editItem, getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler, showNotification } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    render(editTemplate(item));
}

const editTemplate = (item) => html`
<section id="edit">
    <div class="form form-item">
    <h2>Edit Your Item</h2>
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input type="text" name="item" id="item" placeholder="Item" .value=${item.item} />
        <input
        type="text"
        name="imageUrl"
        id="item-image"
        placeholder="Your item Image URL"
        .value=${item.imageUrl}
        />
        <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        .value=${item.price}
        />
        <input
        type="text"
        name="availability"
        id="availability"
        placeholder="Availability Information"
        .value=${item.availability}
        />
        <input
        type="text"
        name="type"
        id="type"
        placeholder="Item Type"
        .value=${item.type}
        />
        <textarea
        id="description"
        name="description"
        placeholder="More About The Item"
        rows="10"
        cols="50"
        .value=${item.description}
        ></textarea>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>`;

async function onEdit({ item, imageUrl, price, availability, type, description }, event) {
    if (!item || !imageUrl || !description || !price || !availability || !type ) {
        showNotification('All fields required!');
        return;
    }
    const id = event.dataset.id;
    await editItem(id, item, imageUrl, price, availability, type, description);
    page.redirect(`/catalog/${id}`);
}