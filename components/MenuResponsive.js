import React, { Component, PropTypes } from 'react'

class MenuResponsive extends Component {
    state = {
        isOpened: false
    }

    componentDidMount() {
        this.responsiveMenuHolder = document.getElementById('respo-menu-holder')
        this.responsiveMenuHolder.addEventListener('click', this.toggleMenuOpen)
    }

    toggleMenuOpen = () => {
        this.responsiveMenuHolder.classList.toggle('opened')
        this.setState({ isOpened: !this.state.isOpened})
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