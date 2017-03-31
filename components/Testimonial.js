import React, { PropTypes } from "react";

function Testimonial({ body, caption, date }) {
    return (
        <div>
            <div className="tp-testemonial">
                <div className="client" />
                <div className="text">{body}<br /><br />
                    <strong>{caption}</strong><br /><span>{date}</span>
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
