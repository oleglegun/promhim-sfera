import React, { PropTypes } from 'react'
import Article from '../../components/Article'

function Clients(props, context) {
    console.log(props.route)
    let title = context.lang == 'ru' ? 'Наши заказчики' : 'Our customers'
    return (
        <div>
            <h1>{title}</h1>
            <img src="./clients.jpg"/>
        </div>
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
