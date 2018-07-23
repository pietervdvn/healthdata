import React from 'react';
import '../../../assets/css/journey/journey.css';


class ComparisonPerAgePerProvince extends React.Component {

    render() {
        return (
            <div>
                <div className="journey_content">

                    <p>
                        -% of people with depression from the same age group and same province
                      
                    </p>

                    <button className="redButtonLink" onClick={() => this.props.onClick()}>Start your journey</button>
                </div>
            </div>
        )
    }
}




export default ComparisonPerAgePerProvince;




