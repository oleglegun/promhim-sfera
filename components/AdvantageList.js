import React, { PropTypes } from "react";
import Advantage from "./Advantage";

function AdvantageList(props) {
    const { items } = props

    return (
        <div className="tp-vl-row">
            <Advantage iconClass={"icon-thumbs-up"} title={items[0].title} body={items[0].body} />
            <Advantage iconClass={"icon-heart"} title={items[1].title} body={items[1].body} />
            <Advantage iconClass={"icon-cogs"} title={items[2].title} body={items[2].body} />
            <Advantage iconClass={"icon-truck"} title={items[3].title} body={items[3].body} last={true} />
            <div className="clear">&nbsp;</div>
        </div>
    )
}

AdvantageList.propTypes = {
    items: PropTypes.array.isRequired
}
AdvantageList.defaultProps = {}

export default AdvantageList
