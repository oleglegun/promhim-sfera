import React, { PropTypes } from 'react'
import PageTitle from '../../components/PageTitle'
import contacts_dict from '../../dictionaries/contacts'

function Contacts(props, context) {
    const dict = contacts_dict[context.lang]
    return (
        <div>
            <PageTitle title={dict.page_title} />
        </div>
    )
}

Contacts.contextTypes = {
    lang: PropTypes.string.isRequired
}
Contacts.propTypes = {}
Contacts.defaultProps = {}

export default Contacts
