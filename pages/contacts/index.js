import React, { PropTypes } from 'react'
import Article from '../../components/Article'
import contacts_dict from '../../dictionaries/contacts'

function Contacts(props, context) {
    const dict = contacts_dict[context.lang]
    return (
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
                        <td></td>
                        <td><strong>{dict.contacts.name}</strong></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-map-marker" /></td>
                        <td>{dict.contacts.address[0]}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{dict.contacts.address[1]}</td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-phone" /></td>
                        <td>{dict.contacts.phone[0]}<strong>{dict.contacts.phone[1]}</strong></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-envelope-o" /></td>
                        <td>E-mail: <a class="email" href="mailto:info@promhim-sfera.ru">info@promhim-sfera.ru</a></td>
                    </tr>
                    <tr>
                        <td><i className="fa fa-clock-o" /></td>
                        <td>{dict.contacts.time}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </Article>
    )
}

Contacts.contextTypes = {
    lang: PropTypes.string.isRequired
}
Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
