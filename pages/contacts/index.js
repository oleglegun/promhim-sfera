import React, { PropTypes } from "react";
import Article from "../../components/Article";
import Helmet from "react-helmet";
import contacts_dict from "../../dictionaries/contacts";
import { config } from "../../config.toml";

function Contacts(props, context) {
    const dict = contacts_dict[context.lang]
    return (
        <div>
            <Helmet
                title={dict.page_title + ' / ' + config[context.lang]}
            />
            <Article title={dict.page_title}>
                <div className="col two_third">
                    <p>
                        <img src="./contacts.jpg" alt={dict.page_title} />
                    </p>
                </div>
                <div className="col one_third last">
                    <h2>{dict.contacts.title}</h2>
                    <table>
                        <tbody>
                        <tr>
                            <td>

                            </td>
                            <td><strong>{dict.contacts.name}</strong></td>
                        </tr>
                        <tr>
                            <td><i className="icon-location" /></td>
                            <td>{dict.contacts.address[0]}</td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                            <td>{dict.contacts.address[1]}</td>
                        </tr>
                        <tr>
                            <td><i className="icon-phone" /></td>
                            <td>{dict.contacts.phone[0]}<a href="tel:+74956444633">+7 495 644-46-33</a></td>
                        </tr>
                        <tr>
                            <td><i className="icon-clock" /></td>
                            <td>{dict.contacts.time}</td>
                        </tr>
                        <tr>
                            <td><i className="icon-mail" /></td>
                            <td>E-mail: <a className="email"
                                           href="mailto:info@promhim-sfera.ru">info@promhim-sfera.ru</a></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Article>
        </div>
    )
}

Contacts.contextTypes = {
    lang: PropTypes.string.isRequired
}
Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
