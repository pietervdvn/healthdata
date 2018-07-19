import React from 'react';
import '../../assets/css/journey/persona.css';
import Timeline from './Timeline';

class Persona extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props.isMale);

        this.state = {
            name: "Lady D",
            age: this.props.age,
            isMale: this.props.gender == "male"?true:false,
            province: this.props.province
        }
    }

    render() {
        return (

            <div>
                <div className="flex-container">
                    <div className="personaLeft">

                    </div>
                    <div className="personaRight">
                        <Timeline />
                        <div className="personaContent">
                            <h1>What is depression?</h1>
                            <p>
                                Depression is a common mental illness. Depression causes severe symptoms that affect how you feel, think, and handle daily activities, such as sleeping, eating, or working.
                                Depression causes feelings of sadness and/or a loss of interest in activities you once enjoyed.
                            </p>

                            <h1><span className="redUnderline">Me</span>et {this.state.name} ...</h1>
                            <p className="bold personaDiagnosis">
                                Diagnosis: Major depressive disorder
                            </p>
                            <div className="personaContent">
                                <p>
                                    {this.state.name} is a <span className="bold red">{this.state.age}</span> year old <span className="bold red">{this.state.isMale ? "male" : "female"}</span> living in <span className="bold red">{this.state.province}</span>.
                            </p>
                                <p>
                                    A few years ago, {this.state.name} <span className="bold red">stopped feeling happiness and joy</span>.
                                </p>
                                <ul>
                                    <li>Lost appetite</li>
                                    <li>Negative feelings</li>
                                </ul>

                                {this.state.isMale ? "He" : "She"} got diagnosed with <span className="bold red">dysthymia</span>.


                                <p>
                                    During the fall, {this.state.name} felt even worse. {this.state.isMale ? "He" : "She"} started feeling worse, {this.state.isMale ? "he" : "she"} was suffering from recurrent depressive disorder. Now, {this.state.name} feels depressed
                                    </p>
                                <ul>
                                    <li>Lost his interest</li>
                                    <li>
                                        Doesn’t have the energy to do anything anymore.
                                            </li>
                                </ul>
                                <p>
                                    {this.state.isMale ? "He" : "She"} is currently suffering from a major depressive disorder.
                                </p>

                            </div>
                            <p>
                                <button className="redButtonLink" onClick={() => this.props.onClick()}>Start your journey</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}



export default Persona;
