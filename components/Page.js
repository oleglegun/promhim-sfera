import React, { PropTypes } from 'react'
import Header from './Header'
import Footer from './Footer'
import MenuResponsive from './MenuResponsiveHolder'
import menu_dict from '../dictionaries/menu'

class Page extends React.Component {
    state = {
        lang: 'ru'
    }

    getChildContext() {
        return {
            lang: this.state.lang
        }
    }

    setLangRu = (e) => {
        e.preventDefault()
        this.setState({
            lang: 'ru'
        })
    }

    setLangEn = (e) => {
        e.preventDefault()
        this.setState({
            lang: 'en'
        })
    }

    render() {
        return (
            <div>
                <Header
                    setLangRu={this.setLangRu}
                    setLangEn={this.setLangEn}
                    lang={this.state.lang}
                    dictionary={{
                        menu: menu_dict[this.state.lang]
                    }}
                />
                <div id="header-shadow"></div>
                <MenuResponsive/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

Page.childContextTypes = {
    lang: PropTypes.string
}
Page.propTypes = {}
Page.defaultProps = {}

export default Page
