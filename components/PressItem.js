import React, { PropTypes } from 'react'

function PressItem(props) {
    return (
        <div className={'col one_fourth' + (props.last ? ' last' : '')}>
            <div className="tp-vl-textblock">
                <a href={props.pdfLink} target="_blank">
                    <img src={props.img}/>
                </a>
                <p>
                    <strong>{props.title}</strong>
                    <br/>
                    <em>{props.caption}</em>
                </p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

PressItem.propTypes = {
    img: PropTypes.string.isRequired,
    pdfLink: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    last: PropTypes.bool
}
PressItem.defaultProps = {}

export default PressItem
