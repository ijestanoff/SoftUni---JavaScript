import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

const editTemplate = (item) =>html`
<section id="edit-page" class="edit">
    <form @submit=${createSubmitHandler(onEdit)} data-id=${item._id} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value = ${item.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description" .value = ${item.description}></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${item.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${item.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`;
//title, description, imageUrl, type

async function onEdit({title, description, imageUrl, type}, event) {
    if (!title || !imageUrl || !description || !type ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, title, description, imageUrl, type);
    page.redirect(`/catalog/${id}`);
}

/*<section id="edit">
    <div class="form">
    <h2>Edit Fact</h2>
    <form @submit=${createSubmitHandler(onEdit)} class="edit-form" data-id=${item._id}>
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        .value = ${item.category}
    />
    <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        .value = ${item.imageUrl}
    />
    <textarea
    id="description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
    .value = ${item.description}
    ></textarea>
    <textarea
    id="additional-info"
    name="additional-info"
    placeholder="Additional Info"
    rows="10"
    cols="50"
    .value = ${item.moreInfo}
    ></textarea>
        <button type="submit">Post</button>
    </form>
    </div>
</section>*/