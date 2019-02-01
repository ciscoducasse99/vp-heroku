import React from 'react';

export default class ToDosListItem extends React.Component {
    constructor(props) {
        super(props);

        /*Not good practice to set state inside component. BEtter to have top level component that does all of it */
        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        /*Destructing allows us to use task and isCompleted from props as variables */
        const { task, isComplete } = this.props;

        const taskStyle = {
            color: isComplete ? 'green' : 'red',
            cursor: 'pointer'
        };

        if (this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultChecked={task} ref="editInput" />
                    </form>
                </td>
            )
        }

        return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
        )
    }

    renderActionSection() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }

        return (
            <td>
                <button className="btn btn-outline-primary"onClick={this.onEditClick.bind(this)}>Edit</button>
                <button className="btn btn-outline-primary vp-rounded"onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
            </td>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(e) {
        e.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }

    render() {
        return (
            <tr>
                <td>{this.renderTaskSection()}</td>
                {this.renderActionSection()}
            </tr>
        );
    }

}