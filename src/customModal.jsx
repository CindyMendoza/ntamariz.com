import React from "react";
import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
export function CustomModal ({ title, modalToShow, closeModal, children }) {
  CustomModal.propTypes = {
    title: PropTypes.string.isRequired,
    modalToShow: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  return (
    <Modal show={modalToShow} onHide={closeModal} size="xl">
      <Modal.Header className="p-5 pb-0" closeButton>
        <div className="contenedor-centrado-flex align-items-center width-100">
          <h1 className="font-family-Starz-2016 ">{title}</h1>
        </div>
      </Modal.Header>
      <Modal.Body className="p-5 pt-3">{children}</Modal.Body>
    </Modal>
  );
}

export default CustomModal;
