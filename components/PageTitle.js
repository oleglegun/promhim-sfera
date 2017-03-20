import React, { PropTypes } from 'react'

function PageTitle(props) {
    return (
        <div className="tp-title page-title style3">
            <h1>{props.title}</h1>
        </div>
    )
}

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}
PageTitle.defaultProps = {}

export default PageTitle
