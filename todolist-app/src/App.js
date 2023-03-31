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
        completed: 'false',
        priority: 'low-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Do the dishes',
        id: uniqid(),
        completed: 'false',
        priority: 'high-prio',
        dueDate: '2021-01-01'
      },
      {
        title: 'Do the laundry',
        id: uniqid(),
        completed: 'true',
        priority: 'low-prio',
        dueDate: '2021-01-01'
      },
    ]
  },
  {
    title: 'Project 1',
    id: uniqid(),
    tasks: []
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

  render() {
    return (
      <>
        <div id='main'>
          <Sidebar projects={this.state.projects} handleChangeCurrentProject={this.handleChangeCurrentProject} currentProjectId={this.state.currentProjectId}/>
          {/* <Content project={
            this.state.projects.find((project)=>{
              return project.id === this.state.currentProjectId || this.state.projects[0].id //if no project is selected, default to first project
            }
          )
          }/> */}
        </div>
      </>
    );
  }
}

export default App;
