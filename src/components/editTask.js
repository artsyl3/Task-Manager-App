import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditTask (props) {
    const [edit , setEdit] = useState(props.task.taskName);
    
    const handleChange = (event) => {
        setEdit(event.target.value)
    }

    const handleSubmit = () => {
        props.onHide();
        submitChange();

    }

    const submitChange = () => {
        props.onEdit(edit , props.index);
    }


    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            Edit
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input value={edit} onChange={handleChange} className='w-100 rounded'></input>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
        </Modal>
  );
}




export default EditTask;