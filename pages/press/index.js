import React, { PropTypes } from "react";
import Article from "../../components/Article";
import PressItem from "../../components/PressItem";
import press_dict from "../../dictionaries/press";
import Helmet from "react-helmet";
import { config } from "../../config.toml";

function Press(props, context) {
    const dict = press_dict[context.lang]

    return (
        <div>
            <Helmet
                title={dict.page_title + ' / ' + config[context.lang]}
            />
            <Article title={dict.page_title}>
                <div className="tp-vl-row">
                    <PressItem img="./article-1.jpg" pdfLink="./article-1.pdf" title={dict.press[0].title}
                               caption={dict.press[0].caption} description={dict.press[0].description} />
                    <PressItem img="./article-2.jpg" pdfLink="./article-2.pdf" title={dict.press[1].title}
                               caption={dict.press[1].caption} description={dict.press[1].description} />
                    <PressItem img="./article-3.jpg" pdfLink="./article-3.pdf" title={dict.press[2].title}
                               caption={dict.press[2].caption} description={dict.press[2].description} />
                    <PressItem img="./article-4.jpg" pdfLink="./article-4.pdf" title={dict.press[3].title}
                               caption={dict.press[3].caption} description={dict.press[3].description} last={true} />
                </div>
                <div className="tp-vl-row">
                    <div className="tp-vl-col full">
                        <hr />
                    </div>
                </div>
                <div className="tp-vl-row">
                    <PressItem img="./article-5.jpg" pdfLink="./article-5.pdf" title={dict.press[4].title}
                               caption={dict.press[4].caption} description={dict.press[4].description} />
                    <PressItem img="./article-6.jpg" pdfLink="./article-6.pdf" title={dict.press[5].title}
                               caption={dict.press[5].caption} description={dict.press[5].description} />
                    <PressItem img="./article-7.jpg" pdfLink="./article-7.pdf" title={dict.press[6].title}
                               caption={dict.press[6].caption} description={dict.press[6].description} />
                    <PressItem img="./article-8.jpg" pdfLink="./article-8.pdf" title={dict.press[7].title}
                               caption={dict.press[7].caption} description={dict.press[7].description} last={true} />
                </div>
            </Article>
        </div>
    )
}

Press.contextTypes = {
    lang: PropTypes.string.isRequired
}
Press.propTypes = {}
Press.defaultProps = {}

export default Press
