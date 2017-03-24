import React, { PropTypes } from "react";
import Article from '../components/Article'
import { prefixLink } from "gatsby-helpers";
import Helmet from "react-helmet";
import { config } from "config";


export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { "name": "description", "content": "ПромXим Сфера - Официальный сайт" },
                    ]}
                />
                <section id="page-content">
                    <h1>
                        Home
                    </h1>
                    <p>{this.context.lang}</p>
                </section>
            </div>
        )
    }
}

Index.contextTypes = {
    lang: PropTypes.string.isRequired
}
