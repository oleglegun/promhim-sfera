import React, { PropTypes } from 'react'

function Title(props) {
    return (
        <div className="tp-title style2">
            <div className="titles">
                <h1>{props.title}</h1>
            </div>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}
Title.defaultProps = {}

export default Title
