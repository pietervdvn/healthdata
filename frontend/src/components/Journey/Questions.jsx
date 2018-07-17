import React from 'react';
import '../../assets/css/journey/questions.css';

import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

const Questions = () => (
  <div>
    <Navbar />
    <div className="journey_content">
      People will be going on a journey here.
    <br />
      Question 1: <input type="text" />
      <br />
      Question 2: <input type="text" />
      <br />
      Question 3: <input type="text" />
      <br />
      <Link to="/journey/whatisdepression">Continue</Link>
    </div>
    <Footer />
  </div>


);


export default Questions;
