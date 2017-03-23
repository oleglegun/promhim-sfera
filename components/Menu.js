import React, { PropTypes } from 'react'
import MenuItem from './MenuItem'

function Menu(props) {
    let menuElements = props.items.map((item, index) => {

        let subMenu = null
        if (item.menu) {
            let subMenuElements = item.menu.map((item, index) => {
                return <MenuItem key={index} title={item.title} path={item.path}/>
            })
            subMenu = (
                <ul className="sub-menu">
                    {subMenuElements}
                </ul>
            )
        }

        return <MenuItem key={index} title={item.title} path={item.path} subMenu={subMenu} />
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
