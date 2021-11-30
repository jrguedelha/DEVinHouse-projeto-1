import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import FormTask from './components/FormTask';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [tasks, setTasks] = useState([
    {
      text: "Esta é uma tarefa de exemplo",
      isDone: false
    }
    ]);

    const addTask = text => {
      const newTasks = [...tasks, { text }];
      setTasks(newTasks);
    }

    const markTaskDone = index => {
      const newTasks = [...tasks];
      newTasks[index].isDone = true;
      setTasks(newTasks);
    }

    const removeTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }

  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Lista de Afazeres</h1>
        </header>
        <FormTask addTask={ addTask } />

        <div className="tasks">
          {tasks.map((task, index) => (
            <Card>
              <Card.Body>
                <Task
                  key= {index}
                  index={index}
                  task={task}
                  markTaskDone={markTaskDone}
                  removeTask={removeTask}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;