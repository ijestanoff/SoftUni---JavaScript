import { html, render } from '../lib.js';

export function showHomeView() {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="home">
    <img src="./images/landing.png" alt="home" />
    <h2 id="landing-text"><span>Add your favourite albums</span> <strong>||</strong> <span>Discover new ones right
        here!</span></h2>
</section>`;

/*<section id="home">
    <h1>Welcome to our website, where curiosity meets enjoyment!
        Discover fascinating fun facts that engage and entertain everyone,
        inviting you to participate in the joy of learning something new together.</h1>
        <img id="logo-img" src="./images/logo.png" alt=""/>
</section>*/