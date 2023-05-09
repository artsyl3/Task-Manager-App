import 'bootstrap/dist/css/bootstrap.css';


function ShowTask({ task , onDelete , index }) {
  
  const handleClick = () => {
    onDelete(index)
  }
  return (<tr>
            <th scope="row">{index+1}</th>
            <td>{task}</td>
            <td>
              
            </td>
            <td>
            <button onClick={handleClick} type="submit" className="btn btn-danger">Delete</button>
            </td>
          </tr>
    );
}
export default ShowTask;
