import React, { PropTypes } from "react";

function BusinessLine(props) {
    const {title, body, img, reverse } = props
    return (
        reverse ? (
                <div className="BusinessLine">
                    <div className="tp-vl-row">
                        <div className="col one_half">
                            <div className="tp-vl-textblock">
                                <h1>
                                    <span>{title[0]} </span>{title[1]}<br /><span>{title[2]} </span>{title[3]}
                                </h1>
                                <p>{body}</p>
                            </div>
                        </div>
                        <div className="col one_half last">
                            <div className="tp-vl-textblock">
                                <img src={img} className="aligncenter size-large" />
                            </div>
                        </div>
                        <div className="clear">&nbsp;</div>
                    </div>
                </div>
            ) : (
                <div className="BusinessLine">
                    <div className="tp-vl-row">
                        <div className="col one_half">
                            <div className="tp-vl-textblock">
                                <img src={img} className="aligncenter size-large" />
                            </div>
                        </div>
                        <div className="col one_half last">
                            <div className="tp-vl-textblock">
                                <h1>
                                    <span>{title[0]} </span>{title[1]}<br /><span>{title[2]} </span>{title[3]}
                                </h1>
                                <p>{body}</p>
                            </div>
                        </div>
                        <div className="clear">&nbsp;</div>
                    </div>
                </div>
            )
    )
}

BusinessLine.propTypes = {
    title: PropTypes.array.isRequired,
    body: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    reverse: PropTypes.bool
}
BusinessLine.defaultProps = {}

export default BusinessLine
