import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

const ModalError = ( props ) => (
  <Modal isOpen={props.isModalOpen} toggle={props.toggleModal}>
        <ModalHeader>Nuk ka qasje ne rrjet!</ModalHeader>
        <ModalBody>
          Paisja juaj nuk ka qasje ne rrjet, Ju lutemi kontrolloni internetin tuaj.
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={props.toggleModal}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
)

export default ModalError