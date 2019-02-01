import React from 'react';

export default class ToDosListItem extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            error:null
        };
    }

    renderError(){
        if(!this.state.error){return null;}
        return <div style={{color:'red'}} > {this.state.error}</div>;
    }


    handleCreate(e){
        /*Prevents freshing of page if nothing is inputted */
        e.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput){
            this.setState({error: validateInput});
            return;
        }

        this.setState({error:null});
        console.log('New todo: ' + this.refs.createInput.value);
        this.props.createTask(task);
        this.refs.createInput.value =' ';
    }

    validateInput(task){
        if(!task){
            return 'Please enter a task';
        } else if(_.find(this.props.todos, todo=> todo.task === task)){
            return 'Task already exist'
        } else {
            return null;
        }
    }

    render(){
        return(
          <form onSubmit={this.handleCreate.bind(this)}>
                {/*ref is an identifer for dom element*/}
                <input type="text" placeholder="New Todo" ref="createInput"/>
                <button>Create</button>
                {this.renderError()}
          </form> 
        );
    }

}