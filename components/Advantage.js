import React, { PropTypes } from "react";

function Advantage(props) {
    const titleTop = props.title.split(' ')[0]
    const titleBottom = props.title.split(' ')[1]
    return (
        <div className={"col one_fourth" + (props.last ? ' last' : '')}>
            <div className="tp-vl-textblock Advantage">
                <p><i className={"fa " + props.iconClass + " circle large"} /></p>
                <h3>{titleTop}<br />{titleBottom}</h3>
                <p>{props.body}</p>
            </div>
        </div>
    )
}

Advantage.propTypes = {
    iconClass: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    last: PropTypes.bool
}
Advantage.defaultProps = {}

export default Advantage
