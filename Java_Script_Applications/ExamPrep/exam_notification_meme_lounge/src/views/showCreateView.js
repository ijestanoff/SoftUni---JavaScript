import { createItem } from '../data/events.js';
import { render, html, page } from '../lib.js';
import { createSubmitHandler, showNotification } from '../util.js';

export function showCreateView() {
    render(createTemplate());
}

const createTemplate = () => html`
<section id="create-meme">
    <form @submit=${createSubmitHandler(onCreate)} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

async function onCreate({ title, description, imageUrl }) {
    if (!title || !imageUrl || !description ) {
        showNotification('All fields required!');
        return;
    }
    await createItem(title, description, imageUrl);

    page.redirect('/catalog');
}