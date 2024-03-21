import { page, render } from '../lib.js';
import { getAllCars, getCarById } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog(ctx) {
    const cars = await getAllCars();
    render(catalogTemplate(cars));
}

const catalogTemplate = (cars) =>html`
<h3 class="heading">Our Cars</h3>
<section id="dashboard">
    ${cars.length? cars.map(carTemplate) : html`<h3 class="nothing">Nothing to see yet</h3>` }
</section>`;

//model, imageUrl, price, weight, speed, about

const carTemplate = (car) =>html`
<div class="car">
    <img src=${car.imageUrl} alt="example1" />
    <h3 class="model">${car.model}</h3>
    <div class="specs">
        <p class="price">Price: €${car.price}</p>
        <p class="weight">Weight: ${car.weight} kg</p>
        <p class="top-speed">Top Speed: ${car.speed} kph</p>
    </div>
    <a class="details-btn" href="/catalog/${car._id}">More Info</a>
</div>`;

// async function onDetails(e) {
    
//     //const car = await getCarById(e.target.href);
//     page.redirect('/catalog/:id');
// } 