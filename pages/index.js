import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from "react-helmet"
import { config } from 'config'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "ПромXим Сфера - Официальный сайт"},
          ]}
        />
        <h1>
          Header!
        </h1>
        <p>Welcome to your new clean Gatsby site</p>
      </div>
    )
  }
}
