import React, { Component } from 'react'
import Task from './task'

class ContentAreaNotCompleted extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-area not-completed">
                {this.props.project.tasks.map((task)=>{
                    // if (task.completed === false) {
                    //     return <Task task={task} key={task.id}/>
                    // }
                    return console.log(task)
                })}
            </div>
        )
    }
}

export default ContentAreaNotCompleted


//sample props = {projects: }