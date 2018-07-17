import React from 'react';
import '../../assets/css/journey/journey.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

const Comparison = () => (

    <div>
        <Navbar />
        <div className="journey_content">
            Comparison
            <br />
            <Link to="/journey/map">Continue</Link>
        </div>
        <Footer />
    </div>

);


export default Comparison;
