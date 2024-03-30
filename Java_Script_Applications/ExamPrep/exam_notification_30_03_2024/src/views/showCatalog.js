import { render } from '../lib.js';
import { getAllItems} from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<h3 class="heading">Market</h3>
    <section id="dashboard">
        ${items.length? items.map(itemTemplate) :null }
    </section>
    ${items.length? null : html`<h3 class="empty">No Items Yet</h3>` }
    `;

const itemTemplate = (item) =>html`
<div class="item">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="model">${item.item}</h3>
    <div class="item-info">
        <p class="price">Price: €${item.price}</p>
        <p class="availability">${item.availability}</p>
        <p class="type">Type: ${item.type}</p>
    </div>
    <a class="details-btn" href="/catalog/${item._id}">Uncover More</a>
    </div>`;