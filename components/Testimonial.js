import React, { PropTypes } from 'react'

function Testimonial(props) {
    return (
        <div>
            <div className="tp-testemonial">
                <div className="client" />
                <div className="text">{props.body}<br/><br/>
                    <strong>{props.caption}</strong><br/><span>{props.date}</span>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    body: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}
Testimonial.defaultProps = {}

export default Testimonial
