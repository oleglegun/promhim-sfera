import React, { PropTypes } from 'react'
import Header from './Header'
import Footer from './Footer'
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

    toggleSetLangRu = (e) => {
        e.preventDefault()
        this.setState({
            lang: 'ru'
        })
    }

    toggleSetLangEn = (e) => {
        e.preventDefault()
        this.setState({
            lang: 'en'
        })
    }

    render() {
        return (
            <div>
                <Header
                    setLangRu={this.toggleSetLangRu}
                    setLangEn={this.toggleSetLangEn}
                    lang={this.state.lang}
                    dictionary={{
                        menu: menu_dict[this.state.lang]
                    }}
                />
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
