import React, { PropTypes } from "react";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
    state = {
        isOpen: false
    }

    componentDidMount() {
    }

    toggleMenuOpen = () => {
        this.setState({ isOpen: true })
    }

    toggleMenuClose = () => {
        this.setState({ isOpen: false })
    }

    render() {
        let menuElements = this.props.items.map((item, index) => {

            let subMenu = null
            if (item.menu) {
                let subMenuElements = item.menu.map((item, index) => {
                    return <MenuItem key={index} title={item.title} path={item.path} />
                })
                subMenu = (
                    <ul className={"sub-menu " + (this.state.isOpen ? 'open' : '')}>
                        {subMenuElements}
                    </ul>
                )
            }

            return <MenuItem key={index} title={item.title} path={item.path} subMenu={subMenu} toggleMenuOpen={this.toggleMenuOpen} toggleMenuClose={this.toggleMenuClose}/>
        })

        return (
            <ul
                id={this.props.id}
                className="menu"
            >
                {menuElements}
            </ul>
        )
    }
}

Menu.propTypes = {
    id: PropTypes.string,
    items: PropTypes.array.isRequired
}
Menu.defaultProps = {}

export default Menu
