import { Link, Outlet } from 'react-router-dom';

// import OurTeam from './OurTeam';
// import Mission from './Mission';
// import ContactUs from './ContactUs';

export default function About() {
    return (
        <>
            <nav className='p-20 hidden lg:flex lg:gap-x-12'>
                <Link to="mission" className='text-sm font-semibold leading-6 text-gray-900'>Our Mission</Link>
                <Link to="our-team" className='text-sm font-semibold leading-6 text-gray-900'>Our Team</Link>
                <Link to="contact-us" className='text-sm font-semibold leading-6 text-gray-900'>Contact Us</Link>
            </nav>

            {/* <Routes>
                <Route path='/mission' element={<Mission />} />
                <Route path='/our-team' element={<OurTeam />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes> */}
            <Outlet />
        </>
    );
}
