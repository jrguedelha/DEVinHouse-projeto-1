import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import FormTask from './components/FormTask';
import Task from './components/Task';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  const [tasks, setTasks] = useState([]);

    const addTask = text => {
      const newTasks = [...tasks, { text, isDone: false }];
      setTasks(newTasks);
      localStorage.setItem('@to-do-app/list', JSON.stringify(newTasks));
      console.log(JSON.parse(localStorage.getItem('@to-do-app/list')));
    }

    const markTaskDone = index => {
      const newTasks = [...tasks];
      newTasks[index].isDone = !(newTasks[index].isDone);
      setTasks(newTasks);
      localStorage.setItem('@to-do-app/list', JSON.stringify(newTasks));
      console.log(JSON.parse(localStorage.getItem('@to-do-app/list')));
    }

    const removeTask = index => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
      localStorage.setItem('@to-do-app/list', JSON.stringify(newTasks));
      console.log(JSON.parse(localStorage.getItem('@to-do-app/list')));
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
                <Task
                  key= {index}
                  index={index}
                  task={task}
                  markTaskDone={markTaskDone}
                  removeTask={removeTask}
                />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;