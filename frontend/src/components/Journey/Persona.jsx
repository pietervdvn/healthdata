import React from 'react';
import '../../assets/css/journey/journey.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

const Persona = () => (

    <div>
        <Navbar />
        <div className="journey_content">
            Persona
        <br />
            <Link to="/journey/comparison">Continue</Link>
        </div>
        <Footer/>
    </div>

);


export default Persona;
