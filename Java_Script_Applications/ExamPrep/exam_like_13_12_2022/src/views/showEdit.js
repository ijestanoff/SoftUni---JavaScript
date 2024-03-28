import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) => html`
<section id="edit">
    <div class="form">
    <h2>Edit Product</h2>
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Product Name"
        .value = ${item.name}
        />
        <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
        .value = ${item.imageUrl}
        />
        <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
        .value = ${item.category}
        />
        <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        .value = ${item.description}
        ></textarea>

        <input
        type="text"
        name="price"
        id="product-price"
        placeholder="Price"
        .value = ${item.price}
        />
        <button type="submit">post</button>
    </form>
    </div>
</section>`;

async function onEdit({ name, imageUrl, category, description, price }, event) {
    if (!category || !name || !description || !imageUrl || !price) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, name, imageUrl, category, description, price);
    page.redirect(`/catalog/${id}`);
}