import { render } from '../lib.js';
import { getAllMotorcycles } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog() {
    const motocycles = await getAllMotorcycles();
    render(catalogTemplate(motocycles));
}

const catalogTemplate = (motocycles) =>html`
<h2>Available Motorcycles</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${motocycles.length? motocycles.map(motocycleTemplate) :null }
</section>
    <!-- Display an h2 if there are no posts -->
    ${motocycles.length? null : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>` }`;

const motocycleTemplate = (motocycle) =>html`
<div class="motorcycle">
    <img src=${motocycle.imageUrl} alt="example1" />
    <h3 class="model">${motocycle.model}</h3>
    <p class="year">Year: ${motocycle.year}</p>
    <p class="mileage">Mileage: ${motocycle.mileage} km.</p>
    <p class="contact">Contact Number: ${motocycle.contact}</p>
    <a class="details-btn" href="/catalog/${motocycle._id}">More Info</a>
</div>`;