import React, {Component} from "react";

class Task extends Component {
    constructor(props) {
        super(props);

    this.state = {
        isFormVisible: false,
        currentTaskCardId: undefined
    }

    this.handleSubmitTaskClick = props.handleSubmitTaskClick;
    this.handleDeleteTaskClick = props.handleDeleteTaskClick;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.currentTaskCardId) {
            const taskCard = document.getElementById(this.state.currentTaskCardId);
            const taskCardTitle = taskCard.querySelector(".title");
            const taskCardOtherContents = taskCard.querySelector(".other-contents");
            const taskCardEditable = taskCard.querySelector(".task-info-editable");

            this.handleSubmitTaskClick(e, this.state.currentTaskCardId);
            taskCardEditable.classList.add("hidden");
            taskCardTitle.classList.remove("hidden");
            taskCardOtherContents.classList.remove("hidden");

            this.setState({ isFormVisible: false, currentTaskCardId: undefined });
            document.removeEventListener("click", this.handleClickOutside);
        }
    }

    onDelete = (e) => {
        e.preventDefault();
        if (this.state.currentTaskCardId) {
            this.setState({ isFormVisible: false, currentTaskCardId: undefined });
            document.removeEventListener("click", this.handleClickOutside);

            this.handleDeleteTaskClick(e, this.state.currentTaskCardId);
        }
    }

    handleClickOutside = (e) => {
        const taskCard = document.getElementById(this.state.currentTaskCardId);
        const taskCardTitle = taskCard.querySelector(".title");
        const taskCardOtherContents = taskCard.querySelector(".other-contents");
        const taskCardEditable = taskCard.querySelector(".task-info-editable");

        if (!taskCard.contains(e.target) && this.state.isFormVisible) {
            taskCardEditable.classList.add("hidden");
            taskCardTitle.classList.remove("hidden");
            taskCardOtherContents.classList.remove("hidden");
            document.removeEventListener("click", this.handleClickOutside);
            this.setState({ isFormVisible: false, currentTaskCardId: undefined });
        }
    } 

    handleClick = (e) => {
        let taskCard = e.target.closest(".task-card");
        if (!taskCard) return;
    
        const taskCardTitle = taskCard.querySelector(".title");
        const taskCardOtherContents = taskCard.querySelector(".other-contents");
        const taskCardEditable = taskCard.querySelector(".task-info-editable");
    
        // if taskCardtitle and taskCardotherContents is not hidden, hide them and show taskCardEditable
        if (taskCardEditable.classList.contains("hidden") && !this.state.isFormVisible) {
            taskCardTitle.classList.add("hidden");
            taskCardOtherContents.classList.add("hidden");
            taskCardEditable.classList.remove("hidden");
            this.setState({ 
                isFormVisible: true,
                currentTaskCardId: taskCard.id
            });
            document.addEventListener("click", this.handleClickOutside)
        }
    }

    render() {
        const {task} = this.props;
        const taskPriority = task.priority === "high-prio"
    ? "High"
    : task.priority === "med-prio"
      ? "Medium"
      : "Low";
      const className = task.completed ? "task-card completed" : "task-card "+task.priority;
        return (
            <div 
            className={className} 
            id={"task-card "+task.id}
            onClick={this.handleClick}>
                <div className="title">
                    <h1>{task.title}</h1>
                </div>
                <div className="other-contents">
                    <h2>Due by: {task.dueDate}</h2>
                    <h3>Priority: {taskPriority}</h3>
                </div>
                <div className="task-info-editable hidden" id={"task-info-editable "+task.id}>
                    <form action method="post" id={task.id} onSubmit={this.onSubmit}>
                        <div className="form-input title-box">
                        <h2>Task Title:</h2>
                        <input 
                            type="text" 
                            name="Title" 
                            id={task.id + "-title"} 
                            form={task.id} 
                            placeholder="Enter the Title" 
                            maxLength={25}
                            defaultValue={task.title}
                            required
                        />
                        </div>
                        <div className="form-input date-box">
                        <h2>Due Date:</h2>
                        <input
                            type="date"
                            name="Due Date"
                            id={task.id + "-date"}
                            form={task.id}
                            defaultValue={task.dueDate}
                            required
                        />
                        </div>
                        <div className="form-input priority-box">
                        <h2>Priority:</h2>
                        <select name="Priority" id={task.id + "-priority"} form={task.id} defaultValue={task.priority}>
                            <option value="high-prio">High</option>
                            <option value="med-prio">Medium</option>
                            <option value="low-prio">Low</option>
                        </select>
                        </div>
                    </form>
                    <div className="button-area">
                        <button className="submit" id={"submit-"+task.id} onSubmit={this.onSubmit} form={task.id}>Submit</button>
                        <button className="delete" id={"delete-"+task.id} onClick={this.onDelete}>Delete</button>
                    </div>
                    <div className="completed-checkbox">
                        <input type="checkbox" id={task.id+"-completed"} defaultChecked={task.completed} />
                        <label htmlFor={task.id+"-completed"}>Completed</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Task;