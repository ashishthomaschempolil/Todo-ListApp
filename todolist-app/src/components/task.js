import React, {Component} from "react";

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task">
                <div className="task-title">{this.props}</div>
                <div className="task-description">{this.props}</div>
                <div className="task-date">{this.props}</div>
            </div>
        )
    }
}

export default Task;