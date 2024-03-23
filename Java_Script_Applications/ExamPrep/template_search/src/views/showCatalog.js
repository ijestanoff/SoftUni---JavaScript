import { render } from '../lib.js';
import { getAllItems} from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const items = await getAllItems();
    render(catalogTemplate(items));
}

const catalogTemplate = (items) =>html`
`;

const itemTemplate = (item) =>html`
`;

/*<h2>Fruits</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${items.length? items.map(itemTemplate) :null }
</section>
    <!-- Display an h2 if there are no posts -->
    ${items.length? null : html`<h2>No fruit info yet.</h2>` }*/

    
/*<div class="fruit">
    <img src=${item.imageUrl} alt="example1" />
    <h3 class="title">${item.name}</h3>
    <p class="description">${item.description}</p>
    <a class="details-btn" href="/catalog/${item._id}">More Info</a>
</div>*/
