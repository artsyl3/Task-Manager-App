import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import EditTask from './EditTask';
import Button from 'react-bootstrap/Button';

function ShowTask({ task, onDelete, index , onEdit}) {
  const [selectedStatus, setSelectedStatus] = useState('Select a status');
  const [modalShow, setModalShow] = React.useState(false);


  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{task.taskName}</td>
      <td>
        <DropdownButton id={`dropdown-basic-button-${index}`} title={selectedStatus}>
          <Dropdown.Item onClick={() => handleStatusChange('In Progress')}>In Progress</Dropdown.Item>
          <Dropdown.Item onClick={() => handleStatusChange('Postponed')}>Postponed</Dropdown.Item>
          <Dropdown.Item onClick={() => handleStatusChange('Finished')}>Finished</Dropdown.Item>
        </DropdownButton>
      </td>
      <td>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Edit
        </Button>
        <EditTask
            show={modalShow}
            onHide={() => setModalShow(false)}
            task={task}
            onEdit={onEdit}
            index={index}
          />
        <button onClick={handleDelete} type="submit" className="btn btn-danger mx-2">
          Delete
        </button>
      </td>
      <td>
        {task.time}
      </td>
    </tr>
  );
}

export default ShowTask;
