import React from 'react';
import '../../../assets/css/journey/journey.css';


class ComparisonMenPerProvince extends React.Component {

    render() {
        return (
            <div>
                <div className="journey_content">

                  <p>

-% of men with depression in the province
                  </p>

                    <button className="redButtonLink" onClick={() => this.props.onClick()}>Start your journey</button>
                </div>
            </div>
        )
    }
}




export default ComparisonMenPerProvince;




