import React, { PropTypes } from "react";
import Menu from "./Menu";
import LangToggle from "./LangToggle";
import Logo from "./Logo";
import MenuResponsive from "./MenuResponsive";

function Header(props) {
    let menuLeftItems = props.dictionary.menu.menu_main_left
    let menuRightItems = props.dictionary.menu.menu_main_right

    return (
        <header className="header">
            <div className="bg">
                <div className="wrapper">
                    <LangToggle {...props} />
                    <nav className="responsive-res">
                        <Logo />
                        <MenuResponsive />
                    </nav>
                    <nav className="desktop-res">
                        <Menu items={menuLeftItems} id="menu-left" />
                        <Logo />
                        <Menu items={menuRightItems} id="menu-right" />
                    </nav>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    lang: PropTypes.string.isRequired,
    setLangRu: PropTypes.func.isRequired,
    setLangEn: PropTypes.func.isRequired,
    dictionary: PropTypes.object.isRequired
}
Header.defaultProps = {}

export default Header
