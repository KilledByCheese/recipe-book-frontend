import React from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";

interface baseModelProps {
  show: boolean;
  onHide: VoidFunction;
  title: string;
  footer: JSX.Element;
  children: JSX.Element;
}

function BaseModal(props:baseModelProps) {
  const { show, onHide, title, footer, children } = props;

  const portalElement = document.getElementById("modal-root")

  return createPortal(
    <Modal
      show={show}
      onHide={onHide}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      {footer}
    </Modal>,
    portalElement!
  );
}

export default BaseModal;



