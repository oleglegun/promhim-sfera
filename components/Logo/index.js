import React, { PropTypes } from "react";
import { Link } from "react-router";
import logo_ru from "./logo-ru.svg";
import logo_en from "./logo-en.svg";

function Logo(props, context) {
    const logo = context.lang == 'ru' ? logo_ru : logo_en
    return (
        <div className="logo">
            <Link to="/">
                <img src={logo} />
            </Link>
        </div>
    )
}

Logo.contextTypes = {
    lang: PropTypes.string.isRequired
}
Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
