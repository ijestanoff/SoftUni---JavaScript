import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create">
    <div class="form">
    <h2>Add Product</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Product Name"
        />
        <input
        type="text"
        name="imageUrl"
        id="product-image"
        placeholder="Product Image"
        />
        <input
        type="text"
        name="category"
        id="product-category"
        placeholder="Category"
        />
        <textarea
        id="product-description"
        name="description"
        placeholder="Description"
        rows="5"
        cols="50"
        ></textarea>

        <input
        type="text"
        name="price"
        id="product-price"
        placeholder="Price"
        />

        <button type="submit">Add</button>
    </form>
    </div>
</section>`;

//name,imageUrl, category, description, price
async function onCreate({ name, imageUrl, category, description, price }) {
    if (!name || !imageUrl || !description || !category || !price) {
        return alert('All fields are required!');
    }
    await createItem(name, imageUrl, category, description, price);

    page.redirect('/catalog');
}