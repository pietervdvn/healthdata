import React from 'react';
import '../../assets/css/journey/persona.css';
import Timeline from './Timeline';

class Persona extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      age: this.props.age,
      isMale: this.props.gender == 'male' ? true : false,
      province: this.props.province
    };
  }

  render() {
    return (
      <div>
        <div className="flex-container">
          <div className="personaLeft"></div>
          <div className="personaRight">
            <Timeline />
            <div className="personaContent">

              <h1>{this.state.name} feels unwell</h1>
              <div className="personaContent">
                <p>
                  For some years now, {this.state.name} has had a strange feeling.
                  {this.state.isMale ? ' He' : ' She'} cannot explain why {this.state.isMale ? 'he' : 'she'} feels that way. 
                  Most of the time, {this.state.isMale ? 'he' : 'she'} can hardly sleep, has little energy, low self-esteem, and does not eat much.
                </p>
                <p>  
                  {this.state.name} suffers from <span className="bold red">dysthymia</span>.
                </p>
                <p>
                  {this.state.name}'s state deteriorated over time before {this.state.isMale ? 'he' : 'she'} felt as {this.state.isMale ? 'he' : 'she'} does today. 
                  When this feeling started occuring, {this.state.isMale ? 'he' : 'she'} though it would not last, so {this.state.isMale ? 'he' : 'she'} did not complain about it.
                  Now, {this.state.name} feels alone and helpness. 
                </p>

                <p>
                  Is it really the case ? 
                </p>

              </div>
              <p>
                <button type="button" className="redButtonLink" onClick={() => this.props.onClick()}>Continue</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Persona;
