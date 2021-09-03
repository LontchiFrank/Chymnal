import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
function MyModal(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Hymnal Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label> Hymn Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Hymn Number" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Hymn Title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSong">
              <Form.Label>Hymn Song</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button variant="info" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default MyModal;
