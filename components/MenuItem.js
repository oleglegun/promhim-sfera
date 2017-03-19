import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

function MenuItem(props) {
    return (
        <li>
            <Link to={prefixLink(props.path)}>{props.title}</Link>
            {props.subMenu}
        </li>
    )
}

MenuItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
    subMenu: PropTypes.object
}
MenuItem.defaultProps = {}

export default MenuItem
