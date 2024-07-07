import About from './components/About';
import Contact from './components/Contact';
import Download from './components/Download';
import Faq from './components/Faq';
import Features from './components/Feature';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OurTeam from './components/OurTeam';
import Testimonial from './components/Testimonial';
import WatchNow from './components/WatchNow';

function App() {

    return (
        <>
            <Navigation />

            <Header />

            <About />

            <WatchNow />

            <Features />
            
            <OurTeam />

            <Testimonial />

            <Faq />

            <Contact />

            <Download />

            <Footer />
        </>
    );
}

export default App;
