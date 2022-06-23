import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.styled';

const ModalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  render() {
    return createPortal(
      <Overlay>
        <ModalStyle>
          <img src="" alt="" />
        </ModalStyle>
      </Overlay>,
      ModalRoot
    );
  }
}
