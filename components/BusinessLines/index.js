import React, { PropTypes } from "react";
import BusinessLine from "../BusinessLine";
import consultingImg from "./bl-consulting.jpg";
import deliveryImg from "./bl-delivery.jpg";
import developmentImg from "./bl-development.jpg";
import seminarImg from "./bl-seminar.jpg";

class BusinessLines extends React.Component {
    state = {
        reverse: true
    }

    componentDidMount() {
        if (window && window.innerWidth < 690) {
            this.setState({reverse: false})
        }
    }

    render() {
        const [bl1, bl2, bl3, bl4] = this.props.items

        return (
            <div>
                <BusinessLine title={bl1.title} body={bl1.body} img={deliveryImg} />
                <hr className="hr2" />

                <BusinessLine title={bl2.title} body={bl2.body} img={developmentImg} reverse={this.state.reverse} />
                <hr className="hr2" />

                <BusinessLine title={bl3.title} body={bl3.body} img={consultingImg} />
                <hr className="hr2" />

                <BusinessLine title={bl4.title} body={bl4.body} img={seminarImg} reverse={this.state.reverse} />
            </div>
        )
    }
}

BusinessLines.propTypes = {
    items: PropTypes.array.isRequired
}
BusinessLines.defaultProps = {}

export default BusinessLines
