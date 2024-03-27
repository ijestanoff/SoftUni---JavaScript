import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) =>html`
<section id="edit-page" class="auth">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" value=${item.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" value=${item.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" value=${item.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" value=${item.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${item.summary}></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

async function onEdit({title, category, maxLevel, imageUrl, summary}, event) {
    if (!title || !imageUrl || !category || !maxLevel || !summary ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, title, category, maxLevel, imageUrl, summary);
    page.redirect(`/catalog/${id}`);
}