import React, { PropTypes } from "react";
import Article from "../../components/Article";
import Helmet from "react-helmet";
import { config } from "../../config.toml";

function Clients(props, context) {
    const title = context.lang == 'ru' ? 'Наши заказчики' : 'Our customers'
    return (
        <div>
            <Helmet
                title={title + ' / ' + config[context.lang]}
            />
            <Article title={title}>
                <img src="./clients.jpg" />
            </Article>
        </div>
    )
}

Clients.contextTypes = {
    lang: PropTypes.string.isRequired
}

Clients.propTypes = {}
Clients.defaultProps = {}

export default Clients
