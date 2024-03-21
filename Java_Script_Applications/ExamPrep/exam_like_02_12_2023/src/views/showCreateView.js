import { createCharacter } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler } from '../util.js';

export function showCreateView(ctx) {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create">
    <div class="form">
    <img class="border" src="./images/border.png" alt="">
    <h2>Add Character</h2>
    <form @submit=${createSubmitHandler(onCreate)} class="create-form">
        <input
        type="text"
        name="category"
        id="category"
        placeholder="Character Type"
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
        rows="2"
        cols="10"
    ></textarea>
    <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
    ></textarea>
        <button type="submit">Add Character</button>
    </form>
    <img class="border" src="./images/border.png" alt="">
    </div>
</section>`;

async function onCreate(data) {
    const category = data.category;
    const imageUrl = data['image-url'];
    const description = data.description;
    const moreInfo = data['additional-info'];
    if (!category || !imageUrl || !description || !moreInfo ) {
        return alert('All fields are required!');
    }
    await createCharacter(category, imageUrl, description, moreInfo);

    page.redirect('/catalog');
}