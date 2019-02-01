import React from 'react';
import _ from 'lodash';
import ToDosListItem from '../ToDosListItem';


export default class ToDosList extends React.Component {
    renderItems() {
        /*Creates a new array from what we have and allows us to customize how we want without mutating it */
        const props = _.omit(this.props, 'todos');
        
        /* map() method says "for each todo items, return <ToDosListItem/>" When it iterate an item, it needs a key to know where it is*/
        /*es6 function syntax ( (todos,index)=><TodosListItem/>) is the same as 
            function(todos,index){
                return<ToDoListItem/>
            }
        */

        /*es6 spread operator (...todo) is the same as 
            task={todo.task} isCompleted={todo.isCompleted}
        */
        return _.map(this.props.todos, (todos, index) => <ToDosListItem key={index} {...todos} {...props} />)
    }

    render() {
        /*this.props logs all props in constructor. this.props.todos logs all todos data, which is hardcoded array of objects*/
        console.log(this.props.todos);

        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}