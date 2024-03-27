import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="catalog-page">
    <h1>All Games</h1>
    ${items.length? items.map(itemTemplate): html`<h3 class="no-articles">No articles yet</h3>`}
</section>`;

const itemTemplate = (item) =>html`
<div class="allGames">
    <div class="allGames-info">
        <img src=${item.imageUrl}>
        <h6>${item.category}</h6>
        <h2>${item.title}</h2>
        <a href="/catalog/${item._id}" class="details-button">Details</a>
    </div>
</div>`;