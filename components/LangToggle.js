import React, { PropTypes } from 'react'

function LangToggle(props) {
    let ruClassName = props.lang == 'ru' ? 'active' : ''
    let enClassName = props.lang == 'en' ? 'active' : ''
    return (
        <div className="LangToggle">
            <a href="#" className={ruClassName} onClick={props.setLangRu}>RU</a>/
            <a href="#" className={enClassName} onClick={props.setLangEn}>EN</a>
        </div>
    )
}

LangToggle.propTypes = {
    lang: PropTypes.string.isRequired,
    setLangRu: PropTypes.func.isRequired,
    setLangEn: PropTypes.func.isRequired
}
LangToggle.defaultProps = {}

export default LangToggle
