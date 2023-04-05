import React, { Component } from 'react';
import Task from './task';
import AddTask from './addTask';

class ContentAreaNotCompleted extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentProjectId, projects } = this.props.props;
    const handleSubmitTaskClick = this.props.handleSubmitTaskClick;
    const handleDeleteTaskClick = this.props.handleDeleteTaskClick;
    const currentProject = projects.find((p) => p.id === currentProjectId);
    const tasks = currentProject.tasks ? currentProject.tasks : [];
    const addTask = {
      id: "add-task-card",
      title: "+",
      completed: false
    }

    return (
      <div className="content-area not-completed">
        <h1>Tasks to be Completed</h1>
        {tasks.map((task) => {
          if (!task.completed) {
            return <Task task={task} key={task.id} handleSubmitTaskClick={handleSubmitTaskClick} handleDeleteTaskClick={handleDeleteTaskClick}/>;
          }
          return null;
        })}
        <AddTask tasks={tasks} task={addTask} key={addTask.id} handleSubmitTaskClick={handleSubmitTaskClick}/>
      </div>
    );
  }
}

export default ContentAreaNotCompleted;