import React, { PropTypes } from "react";
import questionImg from "./question.png";
import { Link } from "react-router";

function QuestionsBlock({ title, body, button }) {
    return (
        <div className="QuestionsBlock tp-vl-row">
            <div className="col one_fourth">
                <div className="tp-vl-imageblock">
                    <img src={questionImg} className="aligncenter" />
                </div>
            </div>
            <div className="col three_fourth last">
                <div className="tp-cta style2 left">
                    <div className="inner">
                        <div className="text">
                            <h1>{title}</h1>
                            <p>{body}</p>
                        </div>
                        <Link to="/contacts/" className="button">{button}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

QuestionsBlock.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired
}
QuestionsBlock.defaultProps = {}

export default QuestionsBlock
