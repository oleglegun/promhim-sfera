import React, { PropTypes } from 'react'
import Article from '../../components/Article'

function Clients(props, context) {
    const title = context.lang == 'ru' ? 'Наши заказчики' : 'Our customers'
    return (
        <Article title={title}>
            <img src="./clients.jpg"/>
        </Article>
    )
}

Clients.contextTypes = {
    lang: PropTypes.string.isRequired
}

Clients.propTypes = {
    route: PropTypes.object.isRequired
}
Clients.defaultProps = {}

export default Clients
