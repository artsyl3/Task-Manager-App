import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import ListTask from "./components/ListTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';




function App() {
    
    const  [tasks , setTasks] = useState([]);

    const editTask = (taskToEdit , indexToEdit) => {
      const updatedTask = tasks.map((task , index) => 
        index === indexToEdit ? taskToEdit : task
      )

      setTasks(updatedTask);

    }
    
    const deleteTask = (indexToRemove) => {
        const updatedTasks = tasks.filter((task , index) => {
          return index !== indexToRemove;
        })
        setTasks(updatedTasks);
    }
    
    const submitTask = (task) => {
        const updatedTasks = [...tasks , task];
        setTasks(updatedTasks);
      }
    
    return (<div className="vh-100 bg-light pt-5 d-flex flex-column ">
        <h2 className="text-center mb-4">To Do App</h2>
        <CreateTask submitTask={submitTask}/>
        <table className="table mb-4 mt-4">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Todo item</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <ListTask tasks={tasks} onDelete={deleteTask} onEdit={editTask}/>
        </table>
    </div>
   
    );
    }

export default App;
