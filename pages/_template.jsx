import React from 'react'
import Page from '../components/Page'
// import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import '../css/reset.css'
import '../css/style.css'
import '../css/custom.css'
import '../css/style-responsive.css'
import '../css/fa.min.css'


// import { rhythm } from '../utils/typography'

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
