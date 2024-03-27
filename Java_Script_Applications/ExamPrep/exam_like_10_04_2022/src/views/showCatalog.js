import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}


const catalogTemplate = (items) =>html`
<section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    <div class="all-posts">
        ${items.length? items.map(itemTemplate): null}
    </div>
    ${items.length? null : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
</section>`;

//title, description, imageUrl, address, phone
const itemTemplate = (item) =>html`
<div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/catalog/${item._id}" class="details-btn btn">Details</a>
    </div>
</div>`;