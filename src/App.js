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
    
    return (<div>
        <CreateTask submitTask={submitTask}/>
        <ShowTask tasks={tasks} />
    </div>
   
    );
    }

export default App;
