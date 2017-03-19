import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import logo from './logo_ru.png'

function Logo(props) {
    return (
        <div className="logo">
            <Link to={prefixLink("/")}>
                <img src={logo}/>
            </Link>
        </div>
    )
}

Logo.propTypes = {}
Logo.defaultProps = {}

export default Logo
