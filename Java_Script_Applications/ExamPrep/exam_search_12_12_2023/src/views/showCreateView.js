import { createCars } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView(ctx) {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create">
    <div class="form form-auto">
    <h2>Share Your Car</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="model" id="model" placeholder="Model"/>
        <input
        type="text"
        name="imageUrl"
        id="car-image"
        placeholder="Your Car Image URL"
        />
        <input
        type="text"
        name="price"
        id="price"
        placeholder="Price in Euro"
        />
        <input
        type="number"
        name="weight"
        id="weight"
        placeholder="Weight in Kg"
        />
        <input
        type="text"
        name="speed"
        id="speed"
        placeholder="Top Speed in Kmh"
        />
        <textarea
        id="about"
        name="about"
        placeholder="More About The Car"
        rows="10"
        cols="50"
        ></textarea>
        <button type="submit">Add</button>
    </form>
    </div>
</section>`;

async function onCreate({ model, imageUrl, price, weight, speed, about }) {
    if (!model || !imageUrl || !price || !weight || !speed || !about) {
        return alert('All fields are required!');
    }
    await createCars(model, imageUrl, price, weight, speed, about);

    page.redirect('/catalog');
}