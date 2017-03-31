import React, { Component, PropTypes } from 'react'
import sliderImg from './slider.jpg'

class Slider extends Component {
    render() {
        const {text} = this.props
        return (
            <div className="Slider">
                <img src={sliderImg}/>
                <div className="Slider__wrapper">
                    <div className="Slider__text Slider__text--first">{text[0]}</div>
                    <div className="Slider__text Slider__text--second">{text[1]}</div>
                    <div className="Slider__text Slider__text--third">{text[2]}</div>
                </div>
            </div>
        )
    }
}

Slider.propTypes = {
    text: PropTypes.array.isRequired
}
Slider.defaultProps = {}

export default Slider
