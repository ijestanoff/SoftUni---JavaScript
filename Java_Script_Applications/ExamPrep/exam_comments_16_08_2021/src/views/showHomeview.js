import { getNewItems } from '../data/events.js';
import { html, render } from '../lib.js';

export async function showHomeView() {
    const items = await getNewItems();
    render(homeTemplate(items.slice(0,3)));
}

const homeTemplate = (items) =>html`
<section id="welcome-world">
    <div class="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
    </div>
    <img src="./images/four_slider_img01.png" alt="hero">
    <div id="home-page">
        <h1>Latest Games</h1>
        ${items.length? items.map(gameTemplate) : html`<p class="no-articles">No games yet</p>`}
    </div>
</section>`;

const gameTemplate = (item) =>html`
<div class="game">
    <div class="image-wrap">
        <img src=${item.imageUrl}>
    </div>
    <h3>${item.title}</h3>
    <div class="rating">
        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
    </div>
    <div class="data-buttons">
        <a href="/catalog/${item._id}" class="btn details-btn">Details</a>
    </div>
</div>`;