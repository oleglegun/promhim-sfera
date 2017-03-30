import React, { PropTypes } from 'react'
import { Link } from 'react-router'

function MenuItem(props) {
    if (props.subMenu) {
        return (
            <li onMouseOver={props.toggleMenuOpen} onMouseOut={props.toggleMenuClose}
                onClick={props.toggleMenuClose} >
                <Link style={{cursor: "pointer"}} activeStyle={{color: 'red'}}>{props.title}</Link>
                {props.subMenu}
            </li>
        )
    }
    return (
        <li>
            <Link activeStyle={{color: 'red'}} to={props.path}>{props.title}</Link>
            {props.subMenu}
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
