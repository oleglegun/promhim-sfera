import React, { PropTypes } from 'react'

function LangToggle({lang, setLangRu, setLangEn}) {
    let ruClassName = lang == 'ru' ? 'active' : ''
    let enClassName = lang == 'en' ? 'active' : ''
    return (
        <div className="LangToggle">
            <a href="#" className={ruClassName} onClick={setLangRu}>RU</a>/
            <a href="#" className={enClassName} onClick={setLangEn}>EN</a>
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
