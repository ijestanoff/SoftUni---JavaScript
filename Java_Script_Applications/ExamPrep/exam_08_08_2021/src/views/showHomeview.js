import { html, page, render } from '../lib.js';

export function showHomeView() {
    page.redirect('/catalog');
    //render(homeTemplate());
}

const homeTemplate = () =>html`
`;

/*<section id="home">
    <h1>Welcome to our website, where curiosity meets enjoyment!
        Discover fascinating fun facts that engage and entertain everyone,
        inviting you to participate in the joy of learning something new together.</h1>
        <img id="logo-img" src="./images/logo.png" alt=""/>
</section>*/