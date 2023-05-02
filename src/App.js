import React from "react";
import CreateTask from "./components/CreateTask";

function App() {
    
    const submitTask = (Task) => {
        console.log(Task);
    }
    
    return (
        <CreateTask submitTask={submitTask}/>
    );
}

export default App;
