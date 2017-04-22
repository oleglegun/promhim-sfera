import React from "react";
import Helmet from "react-helmet";

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
    propTypes () {
        return {
            body: React.PropTypes.string,
        }
    },
    render () {
        const head = Helmet.rewind()

        let css
        if (process.env.NODE_ENV === 'production') {
            css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
        }

        return (
            <html lang="ru">
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {head.title.toComponent()}
                {head.meta.toComponent()}
                {css}
            </head>
            <body className="page page-template-default">
            <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.9/es5-shim.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv-printshiv.min.js" />
            <script src={`/bundle.js?t=${BUILD_TIME}`} />
            </body>
            </html>
        )
    },
})
