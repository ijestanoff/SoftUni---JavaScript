import { createFruit } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView(ctx) {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create">
    <div class="form">
    <h2>Add Fruit</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
        />
        <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image"
        />
        <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
    ></textarea>
    <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
    ></textarea>
        <button type="submit">Add Fruit</button>
    </form>
    </div>
</section>`;

async function onCreate({ name, imageUrl, description, nutrition }) {
    if (!name || !imageUrl || !description || !nutrition ) {
        return alert('All fields are required!');
    }
    await createFruit(name, imageUrl, description, nutrition);

    page.redirect('/catalog');
}