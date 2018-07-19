import React from 'react';
import '../../assets/css/journey/persona.css';


import Navbar from '../Navbar';
import Footer from '../Footer';
import Timeline from './Timeline';
import { Link } from 'react-router-dom';

const Persona = () => (

    <div>
        <Navbar />
        <div className="flex-container">
            <div className="personaLeft">

            </div>
            <div className="personaRight">


            <Timeline/>

                {/* <div>
                The timeline component will come here
            </div> */}
                <div className="personaContent">
                    <h1><span className="redUnderline">Me</span>et Jonathan ...</h1>
                    <p className="bold personaDiagnosis">
                        Diagnosis: Major depressive disorder
                    </p>
                    <p className="personaContent">
                        A few years ago, Jonathan <span className="bold">stopped feeling happiness and joy</span>.
                        He lost his appetite and started having negative feelings. He got diagnosed with <span className="bold">dysthymia</span>.
                        During the fall it got even worse and eventually he fell into a <span>majoy depression</span>. Which is what he deals with everyday now...
                    </p>

                    <Link to="/journey/comparison">Continue</Link>

                </div>
            </div>
        </div>
        <Footer />
    </div>

);


export default Persona;
