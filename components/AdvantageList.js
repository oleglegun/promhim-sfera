import React, { Component, PropTypes } from "react";
import Advantage from './Advantage'

function AdvantageList(props) {
        return (
            <div className="tp-vl-row">
                <Advantage iconClass={"fa-thumbs-up"} title={props.items[0].title} body={props.items[0].body}/>
                <Advantage iconClass={"fa-heart"} title={props.items[1].title} body={props.items[1].body}/>
                <Advantage iconClass={"fa-cogs"} title={props.items[2].title} body={props.items[2].body}/>
                <Advantage iconClass={"fa-truck"} title={props.items[3].title} body={props.items[3].body} last={true}/>
                <div className="clear">&nbsp;</div>
            </div>



        )
}

AdvantageList.propTypes = {
    items: PropTypes.array.isRequired
}
AdvantageList.defaultProps = {}

export default AdvantageList
