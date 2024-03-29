import { searchItems } from '../data/events.js';
import { html, render } from '../lib.js';
import { getUserData } from '../util.js';

export async function showProfileView () {
    const userData = getUserData();
    const items = await searchItems(userData._id);
    render(searchTemplate(userData, items));
}

const searchTemplate = (userData, items) =>html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${userData.gender}.png">
        <div class="user-content">
            <p>Username: ${userData.username}</p>
            <p>Email: ${userData.email}</p>
            <p>My memes count: ${items.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
        ${!items.length? html`<p class="no-memes">No memes in database.</p>` : items.map(itemTemplate) }
    </div>
</section>`;

const itemTemplate = (item) =>html`
<div class="user-meme">
    <p class="user-meme-title">${item.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
    <a class="button" href="/catalog/${item._id}">Details</a>
</div>`;