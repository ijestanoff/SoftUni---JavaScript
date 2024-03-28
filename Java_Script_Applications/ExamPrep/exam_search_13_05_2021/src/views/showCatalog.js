import { render } from '../lib.js';
import { getAllItems} from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const  catalogTemplate = (items) =>html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
        ${items.length? items.map(itemTemplate) :html`<p class="no-cars">No cars in database.</p>` }
    </div>
</section>`;

const itemTemplate = (item) =>html`
<div class="listing">
    <div class="preview">
        <img src=${item.imageUrl}>
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/catalog/${item._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;