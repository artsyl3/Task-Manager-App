import 'bootstrap/dist/css/bootstrap.css';

function Task({ task }) {
 return (
    <div className="card m-3" style={{ borderRadius: "10px" }}>
      <div className="card-body">
        <h5 className="card-title">{task}</h5>
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
