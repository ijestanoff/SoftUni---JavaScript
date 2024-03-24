import { html, render } from '../lib.js';

export function showHomeView() {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="home">
    <img src="./images/beauty-g0d19af267_1920-removebg.png" alt="home" />
    <h2>Looking for the best beauty products?</h2>
    <h3>You are in the right place!</h3>
</section>`;

/*<section id="home">
    <h1>Welcome to our website, where curiosity meets enjoyment!
        Discover fascinating fun facts that engage and entertain everyone,
        inviting you to participate in the joy of learning something new together.</h1>
        <img id="logo-img" src="./images/logo.png" alt=""/>
</section>*/