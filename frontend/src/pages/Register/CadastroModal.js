import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class CadastroModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cadastrado com sucesso
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          Sua ID de acesso é: 0543151
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
    );
  }
}