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
                    <option value="female">Female</option>
                    <option value="null">I'd rather not say</option>
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
                    <option value="antwerp">Antwerp</option>
                    <option value="eastflanders">East Flanders</option>
                    <option value="flemishbrabant">Flemish Brabant</option>
                    <option value="limburg">Limburg</option>
                    <option value="westflanders">West Fladers</option>
                    <option value="liege">Liege</option>
                    <option value="hainaut">Hainaut</option>
                    <option value="luxembourg">Luxembourg</option>
                    <option value="Namur">Namur</option>
                    <option value="Walloon Brabant">Walloon Brabant</option>

                  </select>



                {/* <input type="text" placeholder="Province" id="inp3" onChange={(event) => this.updateVal3(event.target.value)} /> */}
                <p>
                  <Link id="test_link" style={{ display: "none" }} className={this.state.value1} to="/journey/whatisdepression">
                    Start your journey <i className="fa fa-angle-right bold"></i>
                  </Link>
                </p>

              </div>


            </div>

          </div>
          <div className="questionsRight">
            An image will come here.
          </div>
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
