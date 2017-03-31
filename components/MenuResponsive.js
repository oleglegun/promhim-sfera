import React, { Component, PropTypes } from "react";

class MenuResponsive extends Component {
    state = {
        isOpened: false
    }

    componentDidMount() {
        this.responsiveMenuHolder = document.getElementById('respo-menu-holder')
        this.responsiveMenuHolder.addEventListener('click', this.toggleMenuOpen)
        console.log('---', 'change', this.state.isOpened)

    }

    toggleMenuOpen = () => {
        this.setState((prevState) => ({ isOpened: !prevState.isOpened }))
        this.responsiveMenuHolder.classList.toggle('opened')
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