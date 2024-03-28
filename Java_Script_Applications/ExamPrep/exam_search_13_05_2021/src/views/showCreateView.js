import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${createSubmitHandler(onCreate)} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

async function onCreate({ brand, model, description, year, imageUrl, price }) {
    year = Number(year);
    price = Number(price);
    if (!brand || !imageUrl || !description || !model || !year || !price ) {
        return alert('All fields are required!');
    }
    await createItem(brand, model, description, year, imageUrl, price);

    page.redirect('/catalog');
}