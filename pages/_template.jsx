import React from 'react'
import Page from '../components/Page'

import '../css/reset.css'
import '../css/style.css'
import '../css/custom.css'
import '../css/style-responsive.css'
import '../css/icons.css'

module.exports = React.createClass({
    propTypes () {
        return {
            children: React.PropTypes.any,
        }
    },
    render () {
        return (
            <Page>
                {this.props.children}
            </Page>
        )
    },
})
