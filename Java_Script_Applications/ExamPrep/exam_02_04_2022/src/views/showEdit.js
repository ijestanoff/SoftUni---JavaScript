import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) =>html`
<section id="editPage">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value=${item.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value=${item.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value=${item.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value=${item.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value=${item.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;

//
async function onEdit({name, breed, age, weight, image}, event) {
    if (!name || !image || !breed || !age || !weight ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, name, breed, age, weight, image);
    page.redirect(`/catalog/${id}`);
}