import { editItem, getItemsById } from '../data/events.js';
import { html, page, render } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export async function showEditView(ctx) {
    const id = ctx.params.id;
    const item = await getItemsById(id);
    render(editTemplate(item));
}

//
//

//singer, album, imageUrl, release, label, sales
const editTemplate = (item) =>html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form  @submit=${createSubmitHandler(onEdit)} data-id=${item._id} class="edit-form">
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" .value = ${item.singer} />
        <input type="text" name="album" id="album-album" placeholder="Album" .value = ${item.album} />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value = ${item.imageUrl} />
        <input type="text" name="release" id="album-release" placeholder="Release date" .value = ${item.release} />
        <input type="text" name="label" id="album-label" placeholder="Label" .value = ${item.label} />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" .value = ${item.sales} />

        <button type="submit">post</button>
        </form>
    </div>
</section>`;

async function onEdit({singer, album, imageUrl, release, label, sales}, event) {
    if (!singer || !imageUrl || !album || !release || !label || !sales ) {
        return alert('All fields are required!');
    }
    const id = event.dataset.id;
    await editItem(id, singer, album, imageUrl, release, label, sales);
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