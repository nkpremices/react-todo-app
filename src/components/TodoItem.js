import React, { Component } from 'react'
import PropTypes from 'prop-types';

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.done ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onClick={this.props.markDone.bind(this, id)}></input>
                    {title}
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

// propTypes
TodoItem.prototypes = {
    todo: PropTypes.object.isRequired,
    markDone: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


export default TodoItem
