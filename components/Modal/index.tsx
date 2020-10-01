import * as React from "react";
import { ModalClose, ModalInner, ModalOuter } from "./Styles";

interface IModalProps {
  isShown: boolean;
  children: React.ReactNode;
  onDismiss: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isShown, onDismiss }) => {
  return isShown ? (
    <ModalOuter>
      <ModalInner>
        <ModalClose onClick={onDismiss}>&#9747;</ModalClose>
        {children}
      </ModalInner>
    </ModalOuter>
  ) : null;
};

export default Modal;
