import './App.css';
import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import uniqid from 'uniqid';

const projects = [
  {
    title: 'Default',
    id: uniqid(),
    tasks: [
      {
        title: 'Clean the house',
        id: uniqid(),
        completed: false,
        priority: 'med-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Do the dishes',
        id: uniqid(),
        completed: false,
        priority: 'high-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Do the laundry',
        id: uniqid(),
        completed: true,
        priority: 'low-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Call the doctor',
        id: uniqid(),
        completed: true,
        priority: 'med-prio',
        dueDate: '2021-01-01'
      }
    ]
  },
  {
    title: 'Machine Learning',
    id: uniqid(),
    tasks: [
      {
        title: 'Read the book',
        id: uniqid(),
        completed: false,
        priority: 'med-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Do the homework',
        id: uniqid(),
        completed: false,
        priority: 'high-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Learn CNN',
        id: uniqid(),
        completed: true,
        priority: 'low-prio',
        dueDate: '2021-01-01'
      }
    ]
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects,
      currentProjectId: projects[0].id
    }
  }

  handleChangeCurrentProject = (projectId) => {
    this.setState({
      currentProjectId: projectId
    })
    return
  }

  handleSubmitTaskClick = (e, currentTaskCardId) => {
    const taskCard = document.getElementById(currentTaskCardId);
    const taskId = currentTaskCardId === "add-task-card" ? "add-task-card" : taskCard.getAttribute("id").split(" ")[1];
    const form = taskCard.querySelector("form#"+taskId);
    const title = form.querySelector("#"+taskId+"-title").value;
    const dueDate = form.querySelector("#"+taskId+"-date").value;
    const priority = form.querySelector("#"+taskId+"-priority").value;
    const completed = taskCard.querySelector("#"+taskId+"-completed").checked;

    if (title === "" || dueDate === "" || priority === "") {
      return;
    }
    
    if (currentTaskCardId !== "add-task-card"){
      this.setState({
        projects: this.state.projects.map(project => {
          if (project.id === this.state.currentProjectId) {
            project.tasks.map(task => {
              if (task.id === taskId) {
                task.title = title;
                task.dueDate = dueDate;
                task.priority = priority;
                task.completed = completed;
              }
              return task;
            })
          }
          return project;
        }
      )})
    } else {
      console.log(currentTaskCardId)
      this.setState({
        projects: this.state.projects.map(project => {
          if (project.id === this.state.currentProjectId) {
            project.tasks.push({
              title,
              id: uniqid(),
              completed,
              priority,
              dueDate
            })
          }
          return project;
        })
      })
    }
  }

  handleDeleteTaskClick = (e, currentTaskCardId) => {
    const taskCard = document.getElementById(currentTaskCardId);
    const taskId = taskCard.getAttribute("id").split(" ")[1];
    this.setState({
      projects: this.state.projects.map(project => {
        if (project.id === this.state.currentProjectId) {
          project.tasks = project.tasks.filter(task => task.id !== taskId);
        }
        return project;
      })
    })
  }

  render() {
    return (
      <>
        <div id='main'>
          <Sidebar projects={this.state.projects} handleChangeCurrentProject={this.handleChangeCurrentProject} currentProjectId={this.state.currentProjectId}/>
          <Content props={this.state} handleSubmitTaskClick={this.handleSubmitTaskClick} handleDeleteTaskClick={this.handleDeleteTaskClick}/>
        </div>
      </>
    );
  }
}

export default App;
