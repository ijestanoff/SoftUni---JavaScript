import { html, render } from '../lib.js';

export function showHomeView() {
    render(homeTemplate());
}

const homeTemplate = () =>html`
<section id="home">
    <div class="home-intro">
    <h1 class="fancy">Welcome to our community-driven events website! We believe that the best events
        come from the community.</h1>
        
        <p>So why wait? Join our community today and start 
            discovering and sharing the best events in your area!</p>
            <a class="event-btn" href="#">To Events</a>       
    </div>
    <img class="party-img" src="./images/party people.png" alt="event">
</section>`;

/*<section id="home">
    <h1>Welcome to our website, where curiosity meets enjoyment!
        Discover fascinating fun facts that engage and entertain everyone,
        inviting you to participate in the joy of learning something new together.</h1>
        <img id="logo-img" src="./images/logo.png" alt=""/>
</section>*/