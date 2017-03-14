import React, { PropTypes } from 'react'

function Page(props) {
    return (
        <div>
        {props.children}
        </div>
    )
}

Page.propTypes = {}
Page.defaultProps = {}

export default Page
