import React, { PropTypes } from "react";

function PressItem({ img, pdfLink, title, caption, description, last }) {
    return (
        <div className={'col one_fourth' + (last ? ' last' : '')}>
            <div className="tp-vl-textblock">
                <a href={pdfLink} target="_blank">
                    <img src={img} />
                </a>
                <p>
                    <strong>{title}</strong>
                    <br />
                    <em>{caption}</em>
                </p>
                <p>{description}</p>
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
