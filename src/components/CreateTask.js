import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function CreateTask({ submitTask }) {
  const [task, setTask] = useState("");
  

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(task === ""){
      alert("PLease enter a proper task")
    }
    else{
      const currentDate = new Date();   
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() + 1;
      const day = currentDate.getDate();  
      const hour = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const newTask = {
        taskName: task,
        time: `${year}-${month}-${day} ${hour}:${minutes}`
      };
      submitTask(newTask);
      setTask("");
    }
    
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <form onSubmit={handleSubmit} className="d-flex align-items-center w-50">
        <input
          type="text"
          className="form-control me-3"
          id="taskName"
          value={task}
          placeholder="Please enter your task"
          onChange={handleInputChange}
        />
      <button className="btn btn-success">Submit!</button>
    </form>
  </div>
  )
       
}

export default CreateTask;
