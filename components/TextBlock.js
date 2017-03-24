import React, { PropTypes } from 'react'

function TextBlock(props) {
    let items
    if (Array.isArray(props.text)) {
        items = props.text.map((item) => {
            return <p>{item}</p>
        })
    } else {
        items = props.text
    }
    return (
        <div>{items}</div>
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
