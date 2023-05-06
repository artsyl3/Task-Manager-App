import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function CreateTask({ submitTask }) {
  const [task, setTask] = useState("");
  

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitTask(task);
    setTask("");
  };

  return (
    <div className="d-flex justify-content-center mt-2">
      <form onSubmit={handleSubmit} className="d-flex align-items-center">
        <input
          type="text"
          className="form-control me-3"
          id="taskName"
          value={task}
          placeholder="Please enter your task"
          onChange={handleInputChange}
        />
      <button className="btn btn-primary">Submit!</button>
    </form>
  </div>
  )
       
}

export default CreateTask;
