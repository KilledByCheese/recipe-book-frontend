import React from "react";

import { Button, Modal } from "react-bootstrap";
import BaseModal from "./Base.modal";

interface confirmModelProps {
  show: boolean;
  onHide: VoidFunction;
  onConfirm: VoidFunction;
  title: string;
  footer: JSX.Element;
  children: JSX.Element;
  dismissActionText: string;
  confirmActionText: string;
}

function ConfirmationModal(props:confirmModelProps) {
  const {
    show,
    onHide,
    onConfirm,
    title,
    dismissActionText,
    confirmActionText,
    children,
  } = props;


  const footer = (
    <Modal.Footer>
      <Button variant="secondary" onClick={onHide}>
        {dismissActionText}
      </Button>
      <Button variant="danger" onClick={onConfirm}>
        {confirmActionText}
      </Button>
    </Modal.Footer>
  );

  return (
    <BaseModal
      show={show}
      onHide={onHide}
      title={title}
      footer={footer}
    >
      {children}
    </BaseModal>
  );
}

export default ConfirmationModal;
