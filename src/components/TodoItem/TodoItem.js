import React from 'react';
import './TodoItem.css';
const TodoItem = ({ task, onDrag }) => {
  return (
    <div key={task.taskID} draggable onDrag={(event) => onDrag(event, task)}>
      {task.task}
    </div>
  );
};

export default TodoItem;
