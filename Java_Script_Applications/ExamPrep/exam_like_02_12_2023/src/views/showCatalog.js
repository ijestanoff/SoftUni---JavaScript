import { render } from '../lib.js';
import { getAllCharacters } from '../data/events.js';
import { html } from '../lib.js';

export async function showCatalog(ctx) {
    const characters = await getAllCharacters();
    render(catalogTemplate(characters));
}

const catalogTemplate = (characters) =>html`
<h2>Characters</h2>
<section id="characters">
    ${characters.length? characters.map(characterTemplate): null}
</section>
${characters.length? null : html`<h2>No added Heroes yet.</h2>`}`;

const characterTemplate = (character) =>html`
<div class="character">
    <img src="${character.imageUrl}" alt="example1" />
    <div class="hero-info">
        <h3 class="category">${character.category}</h3>
        <p class="description">${character.description}</p>
        <a class="details-btn" href="/catalog/${character._id}">More Info</a>
    </div>
</div>`;
