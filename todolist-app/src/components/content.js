import React from "react";
import ContentAreaNotCompleted from "./contentAreaNotCompleted";
import ContentAreaCompleted from "./contentAreaCompleted";

const Content = (props) => {
    return (
        <div id="content">
            <ContentAreaNotCompleted project={props}/>
            <ContentAreaCompleted project={props}/>
        </div>
    )
}

export default Content;