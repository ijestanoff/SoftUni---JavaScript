import { render } from '../lib.js';
import { getAllItems } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
<h2>Current Events</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${items.length? items.map(itemTemplate): null}
</section>
${items.length? null : html`<h4>No Events yet.</h4>`}`;

//name,imageUrl, category,description, date
const itemTemplate = (item) =>html`
<div class="event">
    <img src=${item.imageUrl} alt="example1" />
    <p class="title">${item.name}</p>
    <p class="date">${item.date}</p>
    <a class="details-btn" href="/catalog/${item._id}">Details</a>
    </div>`;

/*<h2>Fun Facts</h2>
<section id="dashboard">
    ${items.length? items.map(itemTemplate): null}
</section>
${items.length? null : html`<h2>No Fun Facts yet.</h2>`}*/

/*<div class="fact">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="category">${item.category}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/catalog/${item._id}">More Info</a>
</div>*/