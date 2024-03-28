import { editItem, getItemById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    render(editTemplate(item));
}

const editTemplate = (item) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${item.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${item.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${item.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${item.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${item.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${item.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

async function onEdit({ brand, model, description, year, imageUrl, price }, event) {
    year = Number(year);
    price = Number(price);
    if (!brand || !imageUrl || !description || !model || !year || !price ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, brand, model, description, year, imageUrl, price);
    page.redirect(`/catalog/${id}`);
}