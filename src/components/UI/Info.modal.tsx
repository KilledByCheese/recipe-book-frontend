import React from "react";

import { Button, Modal } from "react-bootstrap";
import BaseModal from "./Base.modal";

interface infoModelProps {
  show: boolean;
  onHide: VoidFunction;
  title: string;
  children: JSX.Element;
  buttonText: string;
}

function InfoModal(props:infoModelProps) {
  const { show, onHide, title, children, buttonText } = props;

  const footer = (
    <Modal.Footer>
      <Button variant="primary" onClick={onHide}>
        {buttonText}
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

export default InfoModal;



