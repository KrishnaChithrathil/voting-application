import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export class Model extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Subject details here...
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div >
            <form>
              <label>Subject</label><br></br>
              <input type="text" placeholder="Subject name" /><br></br>
              <label>Description</label><br></br>
              <input type="text" placeholder="Subject Description" /><br></br>
              <button >Save Changes</button>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default Model;