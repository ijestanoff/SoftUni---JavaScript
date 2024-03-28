import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<h2>Products</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${items.length? items.map(itemTemplate): null}
</section>
<!-- Display an h2 if there are no posts -->
${items.length? null : html`<h2>No products yet.</h2>`}`;

//name,imageUrl, category, description, price
const itemTemplate = (item) =>html`
<div class="product">
    <img src=${item.imageUrl} alt="example1" />
    <p class="title">${item.name}</p>
    <p><strong>Price:</strong><span class="price">${item.price}</span>$</p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
</div>`;