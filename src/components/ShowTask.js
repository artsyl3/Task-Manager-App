import 'bootstrap/dist/css/bootstrap.css';



function ShowTask({ task , onDelete , index }) {
  
  const handleClick = () => {
    onDelete(index)
  }
  return (<tr>
            <th scope="row">{index+1}</th>
            <td>{task}</td>
            <td>In progress</td>
            <td>
            <button onClick={handleClick} type="submit" className="btn btn-danger">Delete</button>
            <button onClick={handleClick} type="submit" className="btn btn-success ms-1">Finished</button>
            </td>
          </tr>
    );
}
export default ShowTask;
