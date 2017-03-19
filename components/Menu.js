import React, { PropTypes } from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'

function Menu(props) {
    let menuElements = props.items.map((item, index) => {
        let subMenu = null
        if (item.menu) {
            let subMenuElements = item.menu.map((item, index) => {
                return (
                    <li key={index}>
                        <Link to={prefixLink(item.path)}>{item.title}</Link>
                    </li>
                )
            })
            subMenu = (
                <ul className="sub-menu">{subMenuElements}</ul>
            )
        }

        return (
            <li key={index}>
                <Link to={prefixLink(item.path)}>{item.title}</Link>
                {subMenu}
            </li>
        )
    })
    return (
        <ul id={props.id} className="menu">
            {menuElements}
        </ul>
    )
}

Menu.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array.isRequired
}
Menu.defaultProps = {}

export default Menu
