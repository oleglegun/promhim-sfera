import Header from './Header'
import Footer from './Footer'
import React, { PropTypes } from 'react'

class Page extends React.Component {
    getChildContext() {
        return {
            data: 1
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

Page.propTypes = {}
Page.defaultProps = {}
Page.childContextTypes = {
    data: PropTypes.number
}

export default Page
