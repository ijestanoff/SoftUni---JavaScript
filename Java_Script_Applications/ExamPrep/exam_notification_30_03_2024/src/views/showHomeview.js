import { html, render } from '../lib.js';

export function showHomeView() {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="hero">
    <img src="./images/home.png" alt="home" />
    <p>We know who you are, we will contact you</p>
</section>
`;
