import { html, render } from '../lib.js';

export function showHomeView(ctx) {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="hero">
    <h1>
    Accelerate Your Passion Unleash the Thrill of Sport Cars Together!
    </h1>
</section>`;
