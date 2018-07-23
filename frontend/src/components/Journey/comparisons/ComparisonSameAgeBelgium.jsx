import React from 'react';
import '../../../assets/css/journey/journey.css';

class ComparisonSameAgeBelgium extends React.Component {

    render() {
        return (
            <div>
                <div className="journey_content">

                    <p>

                        -% of people with depression from the same age group in Belgium
                    </p>

                    <button className="redButtonLink" onClick={() => this.props.onClick()}>Start your journey</button>
                </div>
            </div>
        )
    }
}




export default ComparisonSameAgeBelgium;




