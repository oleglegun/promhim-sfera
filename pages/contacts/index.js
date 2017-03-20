import React, { PropTypes } from 'react'

function Contacts(props, context) {
    return (
        <div>Контакты</div>
    )
}

Contacts.contextTypes = {
    lang: PropTypes.string.isRequired
}
Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
