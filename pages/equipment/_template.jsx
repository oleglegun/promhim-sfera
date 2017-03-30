import React, { PropTypes } from "react";
import Article from "../../components/Article";
import Helmet from "react-helmet";
import { config } from "../../config.toml";

function Equipment(props, context) {
    const article = props.route.pages.filter((item) => {
        return item.data.path === props.children.props.route.path && item.data.lang === context.lang
    })[0]

    return (
        <div>
            <Helmet
                title={article.data.title + ' / ' + config[context.lang]}
            />
            <Article title={article.data.title}>
                <div dangerouslySetInnerHTML={{ __html: article.data.body }} />
            </Article>
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
