import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function MenuItem({path, title, subMenu, toggleMenuOpen, toggleMenuClose}) {
    if (subMenu) {
        return (
            <li onMouseOver={toggleMenuOpen} onMouseOut={toggleMenuClose}
                onClick={toggleMenuClose} >
                <Link style={{cursor: "pointer"}} activeStyle={{color: 'red'}}>{title}</Link>
                {subMenu}
            </li>
        )
    }
    return (
        <li>
            <Link activeStyle={{color: 'red'}} to={path}>{title}</Link>
            {subMenu}
        </li>
    )
}

MenuItem.propTypes = {
    path: PropTypes.string,
    title: PropTypes.string.isRequired,
    subMenu: PropTypes.object,
    toggleMenuOpen: PropTypes.func,
    toggleMenuClose: PropTypes.func,
}
MenuItem.defaultProps = {}

export default MenuItem
