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
        for (let j = 0; j < 5; j++) {
            this.state.listOfDummies.push(new Array());
            for (let i = 0; i < 20; i++) {
                const r = Math.floor(Math.random() * 100) + 1;
                this.state.listOfDummies[j].push(<Dummy key={i + "" + j} value={r < 5 ? true : false} />);
            }
        }
        console.log(this.state.listOfDummies)
    }
    render() {
        return (
            <div>
                <Navbar />
                <div className="journey_content">
                    Comparison
                    <br />
                    {
                        this.state.listOfDummies.map(function (list) {
                            let iterationOfDummies = new Array();
                            for (let i = 0; i < list.length; i++) {
                                iterationOfDummies.push(list[i]);
                            }
                            iterationOfDummies.push(<br />);
                            return iterationOfDummies;
                        })
                    }

                    <br />

                    <Link to="/journey/map">Continue</Link>
                </div>
                <Footer />
            </div>
        )
    }
}


class Dummy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRed: this.props.value,
        }
    }
    render() {
        return (
            <i className="fa fa-male" style={{ color: this.state.isRed ? "red" : "black", padding: "0.5em" }}> </i>
        );
    }
}


export default Comparison;
