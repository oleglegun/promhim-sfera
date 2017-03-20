import React, { PropTypes } from 'react'

function Equipment(props, context) {
    const article = props.children.props.route.pages.filter((item) => {
        return item.data.path === props.children.props.route.path && item.data.lang === context.lang
    })[0]

    return (
        <div>
            <h1>{article.data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.data.body }} />
        </div>
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
