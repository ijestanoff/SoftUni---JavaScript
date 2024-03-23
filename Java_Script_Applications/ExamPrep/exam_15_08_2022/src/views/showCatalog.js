import { render } from '../lib.js';
import { getAllItems} from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        ${items.length? items.map(itemTemplate) :null }
    </ul>
    ${items.length? null : html`<h2>There are no items added yet.</h2>` }
</section>`;

const itemTemplate = (item) =>html`
<li class="card">
    <img src=${item.imageUrl} />
    <p>
        <strong>Brand: </strong><span class="brand">${item.brand}</span>
    </p>
    <p>
        <strong>Model: </strong
        ><span class="model">${item.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${item.value}</span>$</p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
</li>`;