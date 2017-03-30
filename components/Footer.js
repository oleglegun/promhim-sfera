import React, { PropTypes } from "react";
import MenuItem from "../components/MenuItem";
import { Link } from "react-router";

import logo_ru from "./Logo/logo-ru.svg";
import logo_en from "./Logo/logo-en.svg";
import footer_dict from "../dictionaries/footer";

function Footer(props, context) {
    const dict = footer_dict[context.lang]
    return (
        <footer>
            <div className="bg">
                <section className="wrapper">
                    <div className="logo">
                        <Link to="/">
                            <img src={context.lang === 'ru' ? logo_ru : logo_en} />
                        </Link>
                    </div>
                    <div className="footer-left">
                        <ul id="footer-menu" className="menu">
                            <MenuItem path={dict.footer_menu.press.path} title={dict.footer_menu.press.title} />
                            <li className="li-sep>"> &nbsp;|&nbsp; </li>
                            <MenuItem path={dict.footer_menu.contacts.path} title={dict.footer_menu.contacts.title} />
                        </ul>
                        <br />
                        <p className="copyright">{dict.copyright + new Date().getFullYear()}</p>
                    </div>
                    <div id="footer-icons">
                        <a href="mailto:info@promhim-sfera.ru" target="_blank"><i className="icon-mail"/></a>
                    </div>
                </section>
            </div>
        </footer>
    )
}

Footer.contextTypes = {
    lang: PropTypes.string.isRequired
}
Footer.propTypes = {}
Footer.defaultProps = {}

export default Footer
