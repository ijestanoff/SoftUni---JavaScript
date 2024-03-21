import { editCars, getCarById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const car = await getCarById(id);
    render(editTemplate(car));

}

const editTemplate = (car) => html`
<section id="edit">
    <div class="form form-auto">
    <h2>Edit Your Car</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${car._id}>
        <input type="text" name="model" id="model" placeholder="Model" .value=${car.model} />
        <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
        .value=${car.imageUrl}
        />
        <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        .value=${car.price}
        />
        <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
        .value=${car.weight}
        />
        <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
        .value=${car.speed}
        />
        <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
        .value=${car.about}
        ></textarea>
        <button type="submit">Edit</button>
    </form>
    </div>
</section>`;

async function onEdit({ model, imageUrl, price, weight, speed, about }, event) {
    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editCars(id, model, imageUrl, price, weight, speed, about);
    page.redirect(`/catalog/${id}`);
}