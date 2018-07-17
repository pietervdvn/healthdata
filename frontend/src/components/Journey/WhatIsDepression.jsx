import React from 'react';
import '../../assets/css/journey/journey.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

const WhatIsDepression = () => (

    <div>
        <Navbar />
        <div className="journey_content">
            What is WhatIsDepression
        <br />
            Video will come here.
        <br />
            <Link to="/journey/persona">Continue</Link>
        </div>
        <Footer/>
    </div>

);


export default WhatIsDepression;
