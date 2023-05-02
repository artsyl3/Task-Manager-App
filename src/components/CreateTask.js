import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function CreateTask({ submitTask }) {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimDescription = taskDescription.trim();
    const newTask = {
      taskName: taskName,
      taskDescription: trimDescription,
    };
    submitTask(newTask);
    setTaskName("");
    setTaskDescription("");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card bg-light">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="taskName">Task Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskName"
                    value={taskName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="taskDescription">Description:</label>
                  <textarea
                    id="taskDescription"
                    className="form-control"
                    rows="3"
                    value={taskDescription}
                    onChange={handleDescriptionChange}
                  />
                </div>

                <button className="btn btn-primary mt-3">Submit!</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTask;
