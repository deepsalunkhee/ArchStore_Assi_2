import React, { Component } from 'react';
import './App.css';
import DraggableList from './components/DraggableList/DraggableList';
import Header from './components/Header/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          taskID: 1,
          task: 'Arch store task',
        },
        {
          taskID: 2,
          task: 'Dance',
        },
        {
          taskID: 3,
          task: 'DSA',
        },
      ],
      completedTasks: [
        {
          taskID: 4,
          task: 'Read a book',
          type: 'done', 
        },
        {
          taskID: 5,
          task: 'Anime watching 😌',
          type: 'done',
        },
      ],
      inProgressTasks: [
        {
          taskID: 6,
          task: 'Code again',
          type: 'inProgress', // This indicates that the task is in progress
        },
      ],
      draggedTask: {},
    };
  }

  onDrag = (event, task) => {
    event.preventDefault();
    this.setState({
      draggedTask: task,
    });
  };

  onDrop = (event, dropType) => {
    event.preventDefault();
    const { draggedTask, todos, completedTasks, inProgressTasks } = this.state;

    if (draggedTask.type === 'done') {
      this.setState({
        completedTasks: completedTasks.filter((task) => task.taskID !== draggedTask.taskID),
        [dropType]: [...this.state[dropType], { ...draggedTask, type: dropType }],
        draggedTask: {},
      });
    } else if (draggedTask.type === undefined) {
      const updatedTodos = todos.filter((task) => task.taskID !== draggedTask.taskID);
      const updatedInProgress = inProgressTasks.filter((task) => task.taskID !== draggedTask.taskID);

      this.setState({
        todos: updatedTodos,
        inProgressTasks: updatedInProgress,
        [dropType]: [...this.state[dropType], { ...draggedTask, type: dropType }],
        draggedTask: {},
      });
    }
  };


  render() {
    const { todos, completedTasks, inProgressTasks } = this.state;
    return (
      <div>
        <Header />
        <div className="App">
          <DraggableList
            items={todos}
            onDrag={this.onDrag}
            onDrop={(event) => this.onDrop(event, 'todos')}
            title="To Do"
          />
          <DraggableList
            items={completedTasks}
            onDrag={this.onDrag}
            onDrop={(event) => this.onDrop(event, 'completedTasks')}
            title="Completed"
          />
          <DraggableList
            items={inProgressTasks}
            onDrag={this.onDrag}
            onDrop={(event) => this.onDrop(event, 'inProgressTasks')}
            title="In Progress"
          />
        </div>
      </div>
    );
  }
}

export default App;
