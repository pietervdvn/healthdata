import React from 'react';
import '../../assets/css/journey/journey.css';

import { Link } from 'react-router-dom';

class ComparisonProvince extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            depressedPercentage: 6,
            listOfDummies: new Array(),
            age: this.props.age,
            isMale: this.props.gender == "male" ? true : false,
            province: this.props.province
        };
        this.fillList();

    }
    fillList() {
        let depressedPpl = this.state.depressedPercentage;
        let goodPpl = 100 - depressedPpl;
        let lsDummies = new Array();
        let i;

        for (let i = 1; i < 101; i++) {
            this.state.listOfDummies.push(<Dummy key={i} value={i <= depressedPpl ? true : false} />);
            if (i % 10 == 0)
                this.state.listOfDummies.push(<br />);

        }

        // this.state.listOfDummies = lsDummies;

        // for (let j = 0; j < 5; j++) {
        //     this.state.listOfDummies.push(new Array());
        //     for (let i = 0; i < 20; i++) {
        //         const r = Math.floor(Math.random() * 100) + 1;
        //         this.state.listOfDummies[j].push(<Dummy key={i + "" + j} value={r < 5 ? true : false} />);
        //     }
        // }
    }
    render() {
        return (
            <div>
                <div className="journey_content">
                    <h1>Comparison over provinces</h1>
                    <p>In {this.state.province}, {this.state.name} has <span className="red bold">{this.state.depressedPercentage}%</span> chances to meet another {this.state.age} years old, touched with depression. <br /> “x persons in blue with 100-x persons in white/red/whatever. In {this.state.province}, that’s [x*ProvincePop].</p>
                    {
                        // this.state.listOfDummies.map(function (list) {
                        //     // let iterationOfDummies = new Array();
                        //     // for (let i = 0; i < list.length; i++) {
                        //     //     iterationOfDummies.push(list[i]);
                        //     // }
                        //     // iterationOfDummies.push(<br />);
                        //     // return iterationOfDummies;
                        //     console.log(list);

                        //     return list;
                        // })

                        this.state.listOfDummies.map(function (dummy) {
                            return dummy;
                        })

                    }
                    <button className="redButtonLink" onClick={() => this.props.onClick()}>Continue</button>
                </div>
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


export default ComparisonProvince;
