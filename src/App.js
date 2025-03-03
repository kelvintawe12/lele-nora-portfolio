import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/Contact';

const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Portfolio />
            <ContactPage />
            <Footer />
        </div>
    );
};

export default App;
