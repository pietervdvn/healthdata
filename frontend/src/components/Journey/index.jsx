import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Questions from './Questions';
import Persona from './Persona';
import ComparisonProvince from './ComparisonProvince';
import ComparisonBelgium from './ComparisonBelgium';
import WhatIsDepression from './WhatIsDepression';




class Journey extends React.Component {
  constructor() {
    super();
    this.state = {
      screenDisplayed: 3,
      age: null,
      gender: null,
      province: null,
    }
  }
  receiveDataAndGoNext(age, gender, province) {
    this.setState({ age: age })
    this.setState({ gender: gender })
    this.setState({ province: province })

    this.nextScreen();
  }

  nextScreen() {
    this.setState({ screenDisplayed: this.state.screenDisplayed + 1 });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.screenDisplayed == 1 && <Questions onClick={(age, gender, province) => this.receiveDataAndGoNext(age, gender, province)} />}
        {this.state.screenDisplayed == 2 && <WhatIsDepression onClick={() => this.nextScreen()} />}
        {this.state.screenDisplayed == 3 && <Persona onClick={() => this.nextScreen()} age={this.state.age} province={this.state.province} gender={this.state.gender} />}
        {this.state.screenDisplayed == 4 && <ComparisonProvince onClick={() => this.nextScreen()} age={this.state.age} province={this.state.province} gender={this.state.gender} />}
        {this.state.screenDisplayed == 5 && <ComparisonBelgium onClick={() => this.nextScreen()} />}
        {this.state.screenDisplayed == 6 && <div>Nothing to show</div>}
        <Footer />
      </div>
    )
  }
}



export default Journey;
