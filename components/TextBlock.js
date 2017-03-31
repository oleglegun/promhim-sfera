import React, { PropTypes } from "react";

function TextBlock({ text }) {
    let items
    if (Array.isArray(text)) {
        items = text.map((item, index) => {
            return <p key={index}>{item}</p>
        })
    } else {
        items = text
    }
    return (
        <div className="TextBlock">{items}</div>
    )
}

TextBlock.propTypes = {
    text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ])
}

TextBlock.defaultProps = {}

export default TextBlock
