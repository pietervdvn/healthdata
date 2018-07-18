import React from 'react';
import '../../assets/css/journey/questions.css';

import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: "",
      value2: "",
      value3: ""
    };
  }

  render() {
    return (
      <div>
        <Navbar />
        <div>
          People will be going on a journey here.
          <br />
          Question 1: <input type="text" id="inp1" onChange={(event) => this.updateVal1(event.target.value)} />
          <br />
          Question 2: <input type="text" id="inp2" onChange={(event) => this.updateVal2(event.target.value)} />
          <br />
          Question 3: <input type="text" id="inp3" onChange={(event) => this.updateVal3(event.target.value)} />
          <br />
          <Link id="test_link" style={{ display: "none" }} className={this.state.value1} to="/journey/whatisdepression">Continue</Link>
        </div>
        <Footer />
      </div>
    );

  }

  updateVal1(val) {
    this.state.value1 = val;
    this.hideOrShowContinueButton();
  }

  updateVal2(val) {
    this.state.value2 = val;
    this.hideOrShowContinueButton();
  }

  updateVal3(val) {
    this.state.value3 = val;
    this.hideOrShowContinueButton();
  }

  hideOrShowContinueButton() {
    if (this.state.value1.length != 0 && this.state.value2.length != 0 && this.state.value3.length != 0) {
      document.getElementById("test_link").style.display = "block"
    }
    else
      document.getElementById("test_link").style.display = "none";
  }

}

export default Questions;
