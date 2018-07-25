import React from 'react';
import '../../assets/css/journey/persona.css';

class Persona1 extends React.Component {

    render() {
        return (
            <div>
                <div className="flex-container">
                    <div className="personaLeft">
                        <div className="Jonathan"></div>
                    </div>
                    <div className="personaRight">
                        <div className="personaContent">
                            <span className="central"><h1><span className="redUnderline">Me</span>et {this.props.name} ......</h1></span>
                           <div className="littlefont">Diagnosis : Major depressive disorder</div>
                            <div className="middlefont">
                            <p>
                                John is a <span className="bold red">{this.props.age}</span> year old man living in
                                {this.props.gender == "male" ? "man" : "woman"} living in <span className="red bold">{this.props.province}</span>.
                                {this.props.gender == "male" ? " He" : " She"} enjoys little things in life, he loves to cook, go to the cinema and have friends home for dinner.
                            </p>
                            <p>
                                A few years ago, Jonathan<span className="bold"> stopped feeling happiness and joy.</span> He lost his appetite and started having negative feelings. He got diagnosed with <span className="bold">dysthymia.</span> During the fall it got even worse and eventually he fell into a <span className="bold">major depression</span>. Which is what he deals with everyday now...
                            </p>
                            </div>

                            <p>
                                <p>
                                    <button type="button" className="redButtonLink" onClick={() => this.props.prev()}>
                                        <i className="fa fa-angle-left bold"></i> Go back
                                    </button> <button type="button" className="redButtonLink" onClick={() => this.props.next()}>
                                        Continue <i className="fa fa-angle-right bold"></i>
                                    </button>
                                </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}



export default Persona1;
