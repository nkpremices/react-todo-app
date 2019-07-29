import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
// import uuid from 'uuid';
import Todos from './components/Todos';
import AdddTodo from './components/AddTodo';
import Header from './components/layouts/Header'
import './App.css'
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: []
  }

  // Toggle complete
  markDone = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) todo.done = !todo.done
        return todo
      })
    })
  }

  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        }))
  }

  AddTodo = (title) => {
    axios.post('', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({
        todos: res.data
      }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            <Route exact path='/' render={props => (
              <React.Fragment>
                <AdddTodo AddTodo={this.AddTodo} />
                <Todos todos={this.state.todos} markDone={this.markDone} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path='/about' component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
