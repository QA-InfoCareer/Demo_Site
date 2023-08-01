import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Modal } from 'react-bootstrap';
function Dialog() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleOpenModal1 = () => {
    setShowModal1(true);
  };

  const handleCloseModal1 = () => {
    setShowModal1(false);
  };
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} className='modal-sm'>
        <Modal.Header closeButton>
          <Modal.Title>Small Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>This is a small modal. It has very less</p>
          <p>content</p>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showModal1} onHide={handleCloseModal1} className='modal-lg'>
        <Modal.Header closeButton>
          <Modal.Title>Large Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handleCloseModal1}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <p style={{ fontSize: '32px', textAlign: 'center' }}>Modal Dialogs</p>
      <p style={{ marginTop: '4%' }}>Click on button to see modal</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button style={{ backgroundColor: 'blue', margin: '0.5%', borderRadius: '5px', height: '30px', color: 'white' }} onClick={handleOpenModal}>Small modal</button>
        <button style={{ backgroundColor: 'blue', margin: '0.5%', borderRadius: '5px', height: '30px', color: 'white' }} onClick={handleOpenModal1}>Large modal</button>
      </div>
    </div>
  )
}
export default Dialog;