import 'bootstrap/dist/css/bootstrap.css';



function ShowTask({ tasks }) {
  const renderedTasks = tasks.map((task, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{task}</td>
        <td>In progress</td>
        <td>
          <button type="submit" className="btn btn-danger">Delete</button>
          <button type="submit" className="btn btn-success ms-1">Finished</button>
        </td>
    </tr> 
    );
  });

  return <tbody>{renderedTasks}</tbody>;
}
export default ShowTask;
