import React, { PropTypes } from 'react'
import Article from '../../components/Article'

function Equipment(props, context) {
    // console.log('---', props.route.pages)
    const article = props.route.pages.filter((item) => {
        return item.data.path === props.children.props.route.path && item.data.lang === context.lang
    })[0]
    // console.log('---', article)

    return (
        <Article title={article.data.title}>
            <div dangerouslySetInnerHTML={{ __html: article.data.body }} />
        </Article>
    )
}

Equipment.contextTypes = {
    lang: PropTypes.string.isRequired
}

Equipment.propTypes = {
    route: PropTypes.object.isRequired
}
Equipment.defaultProps = {}

export default Equipment
