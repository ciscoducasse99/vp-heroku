import React from 'react';
import TodosList from '../components/Todo/ToDosList/index';
import CreateToDo from '../components/Todo/CreateTodo/index';
import Layout from '../components/Layout/Layout';

//hardcoded data. Bad practice
//Creating an array of objects
const todos= [
    {
        task:'Make React tutorial',
        isComplete:false
    },
    {
        task:'Eat dinner',
        isComplete:true
    }
];

export default class ToDo extends React.Component{
    //Makes it rerender whenever something is added or deleted
    constructor(props){
        super(props);

        this.state={
            /*todos is the const array data that was hardcoded*/
            todos
        };
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo=> todo.task === task);
        foundTodo.isComplete= !foundTodo.isComplete;
        this.setState({todos:this.state.todos});
    }

    createTask(task){
        this.state.todos.push({
            task,
            isComplete:false
        });
        this.setState({todos:this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo=> todo.task ===taskToDelete);
        this.setState({todos: this.state.todos});
    }

    render(){
        return(
            <Layout>
            <div className="mx-auto my-5">
                <h1>Todo</h1>
                
                <CreateToDo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
                {/*Passing state.todos into TodosList*/}
                <TodosList 
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
            </Layout>
        );
    }

}

