import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markDone={this.props.markDone} delTodo={this.props.delTodo} />
        ));
    }
}

// propTypes
Todos.prototypes = {
    todos: PropTypes.array.isRequired,
    markDone: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default Todos;
