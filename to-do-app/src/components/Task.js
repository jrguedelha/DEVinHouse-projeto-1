import React from 'react';
import Button from 'react-bootstrap/Button';


function Task({ task, index, markTaskDone, removeTask }) {
  return (
    <div className="task">
		  <input className="checkbox" type="checkbox" onClick={() => markTaskDone(index)}></input>
      <span className="text" style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.text}</span>
      <Button variant="outline-danger" onClick={() => removeTask(index)}>✕</Button>
    </div>
  );
}

export default Task;