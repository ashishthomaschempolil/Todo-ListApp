import React, {Component} from "react";


const today = new Date().toISOString().slice(0, 10);

class AddTask extends Component {
    constructor(props) {
        super(props);

    this.state = {
        isFormVisible: false,
        currentTaskCardId: undefined
    }

    this.handleSubmitTaskClick = props.handleSubmitTaskClick;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.currentTaskCardId) {
            const taskCard = document.getElementById(this.state.currentTaskCardId);
            const taskCardTitle = taskCard.querySelector(".title");
            const taskCardEditable = taskCard.querySelector(".task-info-editable");

            this.handleSubmitTaskClick(e, this.state.currentTaskCardId);
            taskCardEditable.classList.add("hidden");
            taskCardTitle.classList.remove("hidden");

            this.setState({ isFormVisible: false, currentTaskCardId: undefined });
            document.removeEventListener("click", this.handleClickOutside);
        }
    }

    handleClickOutside = (e) => {
        const taskCard = document.getElementById(this.state.currentTaskCardId);
        const taskCardTitle = taskCard.querySelector(".title");
        const taskCardEditable = taskCard.querySelector(".task-info-editable");

        if (!taskCard.contains(e.target) && this.state.isFormVisible) {
            taskCardEditable.classList.add("hidden");
            taskCardTitle.classList.remove("hidden");
            document.removeEventListener("click", this.handleClickOutside);
            this.setState({ isFormVisible: false, currentTaskCardId: undefined });
        }
    } 

    handleClick = (e) => {
        let taskCard = e.target.closest(".task-card");
        if (!taskCard) return;
    
        const taskCardTitle = taskCard.querySelector(".title");
        const taskCardEditable = taskCard.querySelector(".task-info-editable");
    
        // if taskCardtitle and taskCardotherContents is not hidden, hide them and show taskCardEditable
        if (taskCardEditable.classList.contains("hidden") && !this.state.isFormVisible) {
            taskCardTitle.classList.add("hidden");
            taskCardEditable.classList.remove("hidden");
            this.setState({ 
                isFormVisible: true,
                currentTaskCardId: taskCard.id
            });
            document.addEventListener("click", this.handleClickOutside)
        }
    }

    render() {
        const task = this.props.task;

        const className = "task-card add"
        return (
            <div 
            className={className} 
            id={task.id}
            onClick={this.handleClick}>
                <div className="title">
                    <h1>+</h1>
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
                            defaultValue=""
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
                            defaultValue={today}
                            required
                        />
                        </div>
                        <div className="form-input priority-box">
                        <h2>Priority:</h2>
                        <select name="Priority" id={task.id + "-priority"} form={task.id}>
                            <option value="high-prio">High</option>
                            <option value="med-prio">Medium</option>
                            <option value="low-prio">Low</option>
                        </select>
                        </div>
                    </form>
                    <div className="button-area">
                        <button className="submit" id={"submit-"+task.id} onClick={this.onSubmit} form={task.id}>Submit</button>
                    </div>
                    <div className="completed-checkbox">
                        <input type="checkbox" id={task.id+"-completed"} />
                        <label htmlFor={task.id+"-completed"}>Completed</label>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTask;