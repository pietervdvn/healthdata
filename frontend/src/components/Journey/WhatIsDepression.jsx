import React from 'react';
import '../../assets/css/journey/persona.css';
import Timeline from './Timeline';

class WhatIsDepression extends React.Component {
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
                    <div className="personaLeft">
                    {/* Persona portrait here*/}
                    </div>
                    <div className="personaRight">
                        <Timeline />
                        <div className="personaContent">
                            <h1><span className="redUnderline">Me</span>et {this.props.name}</h1>
                            <p>
                                {this.props.name} is a <span className="bold red">{this.props.age}</span> year old <span className="bold red">{this.state.isMale ? 'man' : 'woman'}</span> living in <span className="bold red">{this.props.province}</span>. {this.state.isMale ? 'He' : 'She'} enjoys little things in life, {this.state.isMale ? 'he' : 'she'} loves to cook, go to the cinema and have friends home for dinner.
                            </p>
                            <p>
                                However, things changed a few years ago.
                            </p>    
                            
                            <p>
                                <button type="button" className="redButtonLink" onClick={() => this.props.onClick()}>Continue</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}



export default WhatIsDepression;
