import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${items.length? items.map(itemTemplate): null}
        <div>
            ${items.length? null : html`<p class="no-pets">No pets in dashboard</p>`}
        </div>
    </div>
</section>`;

const itemTemplate = (item) =>html`
<div class="animals-board">
    <article class="service-img">
        <img class="animal-image-cover" src=${item.image}>
    </article>
    <h2 class="name">${item.name}</h2>
    <h3 class="breed">${item.breed}</h3>
    <div class="action">
        <a class="btn" href="/catalog/${item._id}">Details</a>
    </div>
</div>`;