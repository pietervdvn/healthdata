import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer'



const Home = () => (

  <div>
    <Navbar />

    {/* will make homepage better later on, but nav is in the way atm so that's why br */}
    <br/><br/>
    <Link to="/explorer">Explorer</Link><br/>
    <Link to="/journey/questions">Journey</Link>
    <Footer/>    
  </div>
);


export default Home;
