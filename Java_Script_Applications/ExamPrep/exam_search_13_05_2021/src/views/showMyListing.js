import { render } from '../lib.js';
import { getMyListings } from '../data/events.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

export async function showMyListings (ctx) {
    const userData = getUserData();
    const items = await getMyListings(userData._id);
    render(myListingTemplate(items));
}

const myListingTemplate = (items) =>html`<section id="my-listings">
<h1>My car listings</h1>
<div class="listings">
    ${items.length? items.map(listing): html`<p class="no-cars"> You haven't listed any cars yet.</p>`}
</div>
</section>`;

const listing = (item) =>html`
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