import React, {Component} from "react";
import uniqid from "uniqid";


class AddProject extends Component {
    constructor(props) {
        super();
        this.projects = props.projects;
        this.onSubmit = props.onSubmit;
    }

    handleClick = (e) => {
        //if add project is clicked, show input field
        //if anything else is clicked, hide input field
        const addProjectInput = document.getElementById('add-project-input');
        const addProjectText = document.getElementById('add-project-text');

        if (e.target === addProjectText) {
            addProjectInput.classList.remove('hidden');
            addProjectText.classList.add('hidden');
            document.addEventListener('click', this.handleClickOutside)
        } else {
            addProjectInput.classList.add('hidden');
            addProjectText.classList.remove('hidden');
            document.removeEventListener('click', this.handleClickOutside)
        }
    }

    handleClickOutside = (e) => {
        const addProjectInput = document.getElementById('add-project-input');
        const addProjectText = document.getElementById('add-project-text');

        //if click is outside the form, hide form and show "Add Project" text
        if (!addProjectInput.contains(e.target) && !addProjectText.contains(e.target)) {
            addProjectInput.classList.add('hidden');
            addProjectText.classList.remove('hidden');
            document.removeEventListener('click', this.handleClickOutside);
        }
    }

    render() {
        return (
                <div id="add-project">
                    <div id="add-project-text" className onClick={this.handleClick}>Add Project</div>
                    <form action method="post" id="add-project-input" className='hidden' onSubmit={(e)=>this.onSubmit(e, this.props)}>
                        <input type="text" name="Project Title" id="add-project-title" form="add-project-input" placeholder="Enter the Project Title" maxLength={10} />
                    </form>
                </div> 
        )
    }
}

export default AddProject