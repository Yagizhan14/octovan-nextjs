import styled from "styled-components";

export const ModalOuter = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

export const ModalInner = styled.div`
  background-color: white;
  max-height: 600px;
  min-height: 300px;
  width: 600px;
  padding: 1rem;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 16px;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
`;
