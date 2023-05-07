import React, { useState } from "react";
import CreateTask from "./components/CreateTask";
import ShowTask from "./components/ShowTask";


function App() {
    
    const  [tasks , setTasks] = useState([]);

    const submitTask = (task) => {
        const updatedTasks = [...tasks , task];
        setTasks(updatedTasks);
        console.log(tasks);
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
              <ShowTask tasks={tasks} />
        </table>
    </div>
   
    );
    }

export default App;
