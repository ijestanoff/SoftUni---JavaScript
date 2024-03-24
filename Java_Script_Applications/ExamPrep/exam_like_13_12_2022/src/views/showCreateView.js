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

/*<section id="create">
    <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        />
        <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
    ></textarea>
    <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
    ></textarea>
        <button type="submit">Add Fact</button>
    </form>
    </div>
</section>*/