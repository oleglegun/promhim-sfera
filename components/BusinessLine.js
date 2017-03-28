import React, { PropTypes } from "react";

function BusinessLine(props) {

    return (
        props.reverse ? (
                <div className="BusinessLine">
                    <div className="tp-vl-row">
                        <div className="col one_half">
                            <div className="tp-vl-textblock">
                                <h1>
                                    <span>{props.title[0]} </span>{props.title[1]}<br /><span>{props.title[2]} </span>{props.title[3]}
                                </h1>
                                <p>{props.body}</p>
                            </div>
                        </div>
                        <div className="col one_half last">
                            <div className="tp-vl-textblock">
                                <img src={props.img} className="aligncenter size-large" />
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
                                <img src={props.img} className="aligncenter size-large" />
                            </div>
                        </div>
                        <div className="col one_half last">
                            <div className="tp-vl-textblock">
                                <h1>
                                    <span>{props.title[0]} </span>{props.title[1]}<br /><span>{props.title[2]} </span>{props.title[3]}
                                </h1>
                                <p>{props.body}</p>
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
