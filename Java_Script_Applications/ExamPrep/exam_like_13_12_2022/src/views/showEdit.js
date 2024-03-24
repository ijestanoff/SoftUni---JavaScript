import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

//
//
const editTemplate = (item) =>html`
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

//name,imageUrl, category, description, price
async function onEdit({name,imageUrl, category, description, price}, event) {
    if (!category || !name || !description || !imageUrl || !price ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, name,imageUrl, category, description, price
        );
    page.redirect(`/catalog/${id}`);
}

/*<section id="edit">
    <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${item._id}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value = ${item.category}
    />
    <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${item.imageUrl}
    />
    <textarea
    id="description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
    .value = ${item.description}
    ></textarea>
    <textarea
    id="additional-info"
    name="additional-info"
    placeholder="Additional Info"
    rows="10"
    cols="50"
    .value = ${item.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
    </form>
    </div>
</section>*/