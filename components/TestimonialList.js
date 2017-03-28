import React, { PropTypes } from 'react'
import Testimonial from './Testimonial'

function TestimonialList(props) {
    const t1 = props.items[0]
    const t2 = props.items[1]
    return (
        <div className="tp-vl-row">
            <div className="col one_half">
                <Testimonial body={t1.body} caption={t1.caption} date={t1.date}/>
            </div>
            <div className="col one_half last">
                <Testimonial body={t2.body} caption={t2.caption} date={t2.date}/>
            </div>
        </div>
    )
}

TestimonialList.propTypes = {
    items: PropTypes.array.isRequired
}
TestimonialList.defaultProps = {}

export default TestimonialList
