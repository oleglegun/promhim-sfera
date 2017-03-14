import Header from './Header'
import Footer from './Footer'
import React, { PropTypes } from 'react'

function Page(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

Page.propTypes = {}
Page.defaultProps = {}

export default Page
