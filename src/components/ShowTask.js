import React, { useState } from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function ShowTask({ task, onDelete, index }) {
  const [selectedStatus, setSelectedStatus] = useState('Select a status');

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const handleClick = () => {
    onDelete(index);
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{task}</td>
      <td>
        <DropdownButton id={`dropdown-basic-button-${index}`} title={selectedStatus}>
          <Dropdown.Item onClick={() => handleStatusChange('In Progress')}>In Progress</Dropdown.Item>
          <Dropdown.Item onClick={() => handleStatusChange('Postponed')}>Postponed</Dropdown.Item>
          <Dropdown.Item onClick={() => handleStatusChange('Finished')}>Finished</Dropdown.Item>
        </DropdownButton>
      </td>
      <td>
        <button onClick={handleClick} type="submit" className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}

export default ShowTask;
