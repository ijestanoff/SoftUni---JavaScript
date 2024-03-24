import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

//singer, album, imageUrl, release, label, sales
//
const createTemplate = () => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
        </form>
    </div>
</section>`;

async function onCreate({singer, album, imageUrl, release, label, sales}) {
    
    if (!singer || !imageUrl || !album || !release || !label || !sales ) {
        return alert('All fields are required!');
    }
    await createItem(singer, album, imageUrl, release, label, sales);

    page.redirect('/catalog');
}

/*<section id="create">
    <div class="form">
    <h2>Add Fact</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        />
        <input
        type="text"
        name="image-url"
        id="image-url"
        placeholder="Image URL"
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="10"
        cols="50"
    ></textarea>
    <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="10"
        cols="50"
    ></textarea>
        <button type="submit">Add Fact</button>
    </form>
    </div>
</section>*/