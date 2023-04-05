import React, { Component } from 'react'
import Task from './task';
class ContentAreaCompleted extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentProjectId, projects } = this.props.props;
    const handleSubmitTaskClick = this.props.handleSubmitTaskClick;
    const handleDeleteTaskClick = this.props.handleDeleteTaskClick;
    const currentProject = projects.find((p) => p.id === currentProjectId);
    const tasks = currentProject.tasks ? currentProject.tasks : [];

    return (
      <div className="content-area completed">
        <h1>Completed Tasks</h1>
        {tasks.map((task) => {
          if (task.completed) {
            return <Task task={task} key={task.id} handleSubmitTaskClick={handleSubmitTaskClick} handleDeleteTaskClick={handleDeleteTaskClick}/>;
          }
          return null;
        })}
      </div>
    );
  }
}

export default ContentAreaCompleted;
