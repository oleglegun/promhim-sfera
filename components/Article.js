import React, { PropTypes } from 'react'
import PageTitle from './PageTitle'

function Article(props) {
    return (
        <section id="page-content">
            <PageTitle title={props.title}/>
            <div className="content">
                {props.children}
            </div>
        </section>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired
}
Article.defaultProps = {}

export default Article
