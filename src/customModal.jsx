import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
CustomModal.propTypes = {
  title: PropTypes.string.isRequired,
  modalToShow: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  classModal: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export function CustomModal ({ title, modalToShow, closeModal,classModal, children }) {
  
  return (
    <Modal show={modalToShow} onHide={closeModal} size="xl" className={classModal}>
      <Modal.Header className="p-5 pb-0" closeButton>
        <div className="contenedor-centrado-flex align-items-center width-100">
          <h1 className="font-family-Starz-2016 fondo-amarillo-titular">{title}</h1>
        </div>
      </Modal.Header>
      <Modal.Body className="p-5 pt-3">{children}</Modal.Body>
    </Modal>
  );
}

export default CustomModal;
