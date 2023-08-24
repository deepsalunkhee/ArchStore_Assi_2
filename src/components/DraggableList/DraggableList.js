import React from 'react';
import TodoItem from './../TodoItem/TodoItem';
import './DraggableList.css';
const DraggableList = ({ items, onDrag, onDrop ,title}) => {
  return (
    < div className="list">
    <h1>{title}</h1>
    <div
      onDrop={(event) => onDrop(event)}
      onDragOver={(event) => event.preventDefault()}
     
    >
      {items.map((task) => (
        <TodoItem key={task.taskID} task={task} onDrag={onDrag} />
      ))}
    </div>
    </div>
    
  );
};

export default DraggableList;
