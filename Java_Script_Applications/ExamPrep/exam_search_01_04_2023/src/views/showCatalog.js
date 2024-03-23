import { render } from '../lib.js';
import { getAllFruits} from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const fruits = await getAllFruits();
    render(catalogTemplate(fruits));
}

const catalogTemplate = (fruits) =>html`
<h2>Fruits</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${fruits.length? fruits.map(fruitTemplate) :null }
</section>
    <!-- Display an h2 if there are no posts -->
    ${fruits.length? null : html`<h2>No fruit info yet.</h2>` }`;

//name,imageUrl, description, nutrition
const fruitTemplate = (fruit) =>html`
<div class="fruit">
    <img src=${fruit.imageUrl} alt="example1" />
    <h3 class="title">${fruit.name}</h3>
    <p class="description">${fruit.description}</p>
    <a class="details-btn" href="/catalog/${fruit._id}">More Info</a>
</div>`;