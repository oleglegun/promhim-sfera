import React, { PropTypes } from "react";

function Advantage({ title, body, iconClass, last }) {
    const titleTop = title.split(' ')[0]
    const titleBottom = title.split(' ').slice(1).join(' ')

    return (
        <div className={"col one_fourth" + (last ? ' last' : '')}>
            <div className="tp-vl-textblock Advantage">
                <p><i className={iconClass + " large"} /></p>
                <h3>{titleTop}<br />{titleBottom}</h3>
                <p>{body}</p>
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
