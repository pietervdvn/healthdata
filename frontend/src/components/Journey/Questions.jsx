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
        <div className="flex-container">
          <div>
            <h1>Hi there!</h1>
            <p>
              Before we start, we just need you to fill in some simple questions.
              <br />
              Don't worry,
              <span className="red bold">this won't take long! </span>
              And it will make the journey much more personal ;)
            </p>
            <div className="flex-container">
              <div>
                <div>
                  What's your age?
                <br /> <input type="text" id="inp1" onChange={(event) => this.updateVal1(event.target.value)} />
                </div>
                <div>
                  What's your gender?
                <br /> <input type="text" id="inp2" onChange={(event) => this.updateVal2(event.target.value)} />
                </div>
              </div>

              <div>
                In what province do you live?
                <br /> <input type="text" id="inp3" onChange={(event) => this.updateVal3(event.target.value)} />
              </div>
            </div>
          </div>
          <div>
            oi
          </div>



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
