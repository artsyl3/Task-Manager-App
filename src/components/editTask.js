import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditTask (props) {
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
            <input className='w-100 rounded'></input>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide}>Save</Button>
        </Modal.Footer>
        </Modal>
  );
}




export default EditTask;