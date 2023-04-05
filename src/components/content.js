import React from "react";
import ContentAreaNotCompleted from "./contentAreaNotCompleted";
import ContentAreaCompleted from "./contentAreaCompleted";

const Content = ({props, handleSubmitTaskClick, handleDeleteTaskClick}) => {
    return (
        <div id="content">
            <div className="content-main">
                <ContentAreaNotCompleted props={props} handleSubmitTaskClick={handleSubmitTaskClick} handleDeleteTaskClick={handleDeleteTaskClick}/>
                <ContentAreaCompleted props={props} handleSubmitTaskClick={handleSubmitTaskClick} handleDeleteTaskClick={handleDeleteTaskClick}/>
            </div>
        </div>
    )
}

export default Content;