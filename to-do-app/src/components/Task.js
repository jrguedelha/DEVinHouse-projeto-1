import React from 'react';
import Button from 'react-bootstrap/Button';

function Task({ task, index, markTaskDone, removeTask }) {
  return (
    <div className="task">
      <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.text}</span>
      <div>
        <Button variant="outline-success" onClick={() => markTaskDone(index)}>✓</Button>{' '}
        <Button variant="outline-danger" onClick={() => removeTask(index)}>✕</Button>
      </div>
    </div>
  );
}

export default Task;