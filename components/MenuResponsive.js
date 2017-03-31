import React, { Component, PropTypes } from "react";

class MenuResponsive extends Component {
    state = {
        isOpened: false
    }

    componentDidMount() {
        this.responsiveMenuHolder = document.getElementById('respo-menu-holder')
        this.responsiveMenuHolder.addEventListener('click', this.toggleMenuOpen)
    }

    toggleMenuOpen = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }))

        if (this.state.isOpened) {
            this.responsiveMenuHolder.classList.remove('opened')
        } else {
            this.responsiveMenuHolder.classList.add('opened')
        }
    }

    render() {
        const iconClass = this.state.isOpened ? 'icon-cancel' : 'icon-menu'
        return (
            <div id="responsive-menu" onClick={this.toggleMenuOpen}>
                <i className={iconClass} />
            </div>
        )
    }
}

MenuResponsive.propTypes = {}
MenuResponsive.defaultProps = {}

export default MenuResponsive