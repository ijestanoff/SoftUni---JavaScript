import { editFruit, getFruitById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const fruit = await getFruitById(id);
    render(editTemplate(fruit));
}

const editTemplate = (fruit) => html`
<section id="edit">
    <div class="form">
    <h2>Edit Fruit</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${fruit._id}>
        <input
        type="text"
        name="name"
        id="name"
        placeholder="Fruit Name"
        .value=${fruit.name}
        />
        <input
        type="text"
        name="imageUrl"
        id="Fruit-image"
        placeholder="Fruit Image URL"
        .value=${fruit.imageUrl}
        />
        <textarea
        id="fruit-description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
        .value=${fruit.description}
        ></textarea>
        <textarea
        id="fruit-nutrition"
        name="nutrition"
        placeholder="Nutrition"
        rows="10"
        cols="50"
        .value=${fruit.nutrition}
        ></textarea>
        <button type="submit">post</button>
    </form>
    </div>
</section>`;

async function onEdit({ name, imageUrl, description, nutrition }, event) {
    if (!name || !imageUrl || !description || !nutrition ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editFruit(id, name, imageUrl, description, nutrition);
    page.redirect(`/catalog/${id}`);
}