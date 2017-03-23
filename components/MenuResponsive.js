import React, { Component, PropTypes } from 'react'

class MenuResponsive extends Component {
    componentDidMount() {
        const responsiveMenu = document.querySelector('#responsive-menu')
        let IsOpened = false
        const menuIcon = responsiveMenu.querySelector('i')
        const responsiveMenuHolder = document.querySelector('#respo-menu-holder')
        responsiveMenu.onclick = e => {
            if (!IsOpened) {
                menuIcon.classList.remove('fa-bars')
                menuIcon.classList.add('fa-times')
                responsiveMenuHolder.style.display = 'block'
                IsOpened = true
            } else {
                menuIcon.classList.remove('fa-times')
                menuIcon.classList.add('fa-bars')
                responsiveMenuHolder.style.display = 'none'
                IsOpened = false
            }
        }
    }

    render() {
        return (
            <div id="responsive-menu">
                <i className="fa fa-bars" />
            </div>
        )
    }
}

MenuResponsive.propTypes = {}
MenuResponsive.defaultProps = {}

export default MenuResponsive