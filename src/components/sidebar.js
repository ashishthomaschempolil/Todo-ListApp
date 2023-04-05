import React from "react";
import uniqid from "uniqid";
import AddProject from "./addProject";

const Sidebar = ({projects, handleChangeCurrentProject, currentProjectId}) => {
    function onProjectCLick(key, e) {
        let currentActiveProject = projects.find(project => project.id === currentProjectId).title;
        document.getElementById(currentActiveProject).classList.remove('active');

        let newActiveProject = projects.find(project => project.id === key).title;
        document.getElementById(newActiveProject).classList.add('active');
        handleChangeCurrentProject(key);
    }

    function onSubmit(e, projects) {
        e.preventDefault();
        const projectTitle = e.target.elements["Project Title"].value;
        const project = {
            title: projectTitle,
            id: uniqid(),
            tasks: []
        };
        projects.push(project);
        document.getElementById('add-project-input').classList.add('hidden');
        document.getElementById('add-project-text').classList.remove('hidden');
        // rerender the sidebar
        handleChangeCurrentProject(project.id);
    }


    return (
        <div id="sidebar">
            <div className="sidebar-title">
                <h1>To Do App</h1>
            </div>
            <div className="sidebar-projects">
                <div id='heading'>
                    <h2>Projects</h2>
                </div>
                {projects.map((project) => (
                    project.id === currentProjectId ?
                        <div key={project.id} className="project-title active" id={project.title}>
                            <li onClick={(e) => onProjectCLick(project.id, e)}>{project.title}</li>
                        </div> :
                        <div key={project.id} className="project-title" id={project.title}>
                            <li onClick={(e) => onProjectCLick(project.id, e)}>{project.title}</li>
                        </div>
                ))}
                <AddProject projects={projects} onSubmit={e=>{onSubmit(e, projects)}} />
            </div>
        </div>
    );
};

export default Sidebar;