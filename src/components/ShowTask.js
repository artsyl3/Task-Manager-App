import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Task({ task }) {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="card m-3" style={{ borderRadius: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{task.taskName}</h5>
        <p className="card-text d-flex ">
          {showMore ? task.taskDescription : task.taskDescription.slice(0, 20)}
          {task.taskDescription.length > 20 && (
            <button className="btn btn-primary" onClick={toggleShowMore}>
              {showMore ? "Show Less" : "See More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
}

function ShowTask({ tasks }) {
  const renderedTasks = tasks.map((task, index) => {
    return <Task task={task} key={index} />;
  });

  return <div className="d-flex flex-wrap">{renderedTasks}</div>;
}

export default ShowTask;
