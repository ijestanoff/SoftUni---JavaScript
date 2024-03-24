import { html, render } from '../lib.js';

export function showHomeView() {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="home">
    <img
    src="./images/pngkey.com-hunting-png-6697165-removebg-preview.png"
    alt="home"
    />
    <h2>Searching for a job?</h2>
    <h3>The right place for a new career start!</h3>
</section>`;

/*<section id="home">
    <h1>Welcome to our website, where curiosity meets enjoyment!
        Discover fascinating fun facts that engage and entertain everyone,
        inviting you to participate in the joy of learning something new together.</h1>
        <img id="logo-img" src="./images/logo.png" alt=""/>
</section>*/