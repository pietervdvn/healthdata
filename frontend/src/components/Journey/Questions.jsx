import React from 'react';
import '../../assets/css/journey/questions.css';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';
import Footer from '../Footer';

class Questions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value1: "", //age
      value2: "", //gender
      value3: "" //location
    };
  }

  NextScreenAndSendData() {
    this.props.onClick(this.state.value1, this.state.value2, this.state.value3);
  }
  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="questionsLeft">
            <div className="questionsContent">
              <h1>Hi there!</h1>
              <p className="questionsExplenation">
                Before we start, we just need you to fill in some simple questions.
                Don't worry,
              <span className="red bold"> this won't take long! </span>

                And it will make the journey much more personal ;)
            </p>
              <div className="flex-container firsttwoQuestions">
                <div>
                  <div>
                    <label htmlFor="inp1">What's your age?</label>
                    <br />
                    <input type="number" id="inp1" min="1" max="120" onChange={(event) => this.updateVal1(event.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="inp2">
                    What's your gender?
                  </label>
                  <br />
                  <select id="inp2" onChange={(event) => this.updateVal2(event.target.value)}>
                    <option disabled selected value></option>
                    <option value="male">Male</option>
                    <option value="female`">Female</option>
                  </select>
                </div>
              </div>
              <div className="thirdQuestion">
                <label htmlFor="inp3">
                  In what province do you live?
                    </label>
                <br />


                <select id="inp3" onChange={(event) => this.updateVal3(event.target.value)} >
                  <option disabled selected value></option>
                  <option value="Antwerp">Antwerp</option>
                  <option value="East Flanders">East Flanders</option>
                  <option value="Flemish Brabant">Flemish Brabant</option>
                  <option value="Limburg">Limburg</option>
                  <option value="West Flanders">West Fladers</option>
                  <option value="Liege">Liege</option>
                  <option value="Hainaut">Hainaut</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Namur">Namur</option>
                  <option value="Walloon Brabant">Walloon Brabant</option>

                </select>

                <p>
                  <button id="continue_button" style={{ display: "none" }} className="redButtonLink" onClick={() => this.NextScreenAndSendData()}>Start your journey <i className="fa fa-angle-right bold"></i></button>
                </p>

              </div>


            </div>

          </div>
          <div className="questionsRight">
            An image will come here.
          </div>
        </div>
      </div>
    );

  }

  updateVal1(val) {
    this.state.value1 = val;
    // super.setState({value1: "lol"});    
    // console.log(this.state.value1);
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
      document.getElementById("continue_button").style.display = "block"
    }
    else
      document.getElementById("continue_button").style.display = "none";
  }


}

export default Questions;
