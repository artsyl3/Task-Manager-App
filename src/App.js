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
        <h2 className="text-center">To Do App</h2>
        <CreateTask submitTask={submitTask}/>
        <ShowTask tasks={tasks} />
    </div>
   
    );
    }

export default App;
