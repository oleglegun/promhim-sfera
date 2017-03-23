import React, { PropTypes } from 'react'
import Menu from './Menu'
import menu_dict from '../dictionaries/menu'

function ResponsiveMenu(props, context) {
    const dict = menu_dict[context.lang]
    let menuLeftItems = dict.menu_main_left
    let menuRightItems = dict.menu_main_right
    return (
        <div id="respo-menu-holder">
            <Menu id="respo-menu-list-left" items={menuLeftItems}/>
            <Menu id="respo-menu-list-left" items={menuRightItems}/>
        </div>
    )
}

ResponsiveMenu.contextTypes = {
    lang: PropTypes.string.isRequired
}
ResponsiveMenu.propTypes = {}
ResponsiveMenu.defaultProps = {}

export default ResponsiveMenu
