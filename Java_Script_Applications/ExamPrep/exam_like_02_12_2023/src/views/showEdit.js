import { editCharacter, getCharactersById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const character = await getCharactersById(id);
    render(editTemplate(character));
}

const editTemplate = (char) =>html`
<section id="edit">
    <div class="form">
    <img class="border" src="./images/border.png" alt="">
    <h2>Edit Character</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${char._id}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
        .value = ${char.category}
    />
    <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${char.imageUrl}
    />
    <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
        .value = ${char.description}
    ></textarea>
    <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
        .value = ${char.moreInfo}
    ></textarea>
        <button type="submit">Edit</button>
    </form>
    <img class="border" src="./images/border.png" alt="">
    </div>
</section>`;

async function onEdit(data, event) {
    const category = data.category;
    const imageUrl = data['image-url'];
    const description = data.description;
    const moreInfo = data['additional-info'];
    if (!category || !imageUrl || !description || !moreInfo ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editCharacter(id, category, imageUrl, description, moreInfo);
    page.redirect(`/catalog/${id}`);
}