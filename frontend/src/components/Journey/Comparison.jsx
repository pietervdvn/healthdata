import React from 'react';
import '../../assets/css/journey/journey.css';

import Navbar from '../Navbar';
import Footer from '../Footer';

import { Link } from 'react-router-dom';

class Comparison extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listOfDummies: new Array(),
        };
        this.fillList();

    }
    fillList() {
        for (let i = 0; i < 100; i++) {
            this.state.listOfDummies.push(<Dummy />);
        }
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="journey_content">
                    Comparison
                    <br />
                        {this.state.listOfDummies}
                    <br />
                    <Link to="/journey/map">Continue</Link>
                </div>
                <Footer />
            </div>
        );
    }
}

const Dummy = () => (
    <div>
        Oi
    </div>
);


export default Comparison;
