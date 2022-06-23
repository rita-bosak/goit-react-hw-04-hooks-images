import React from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.styled';

const ModalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  render() {
    const { largeImageURL, tags } = this.props.modalImage;

    return createPortal(
      <Overlay>
        <ModalStyle>
          <img src={largeImageURL} alt={tags} />
        </ModalStyle>
      </Overlay>,
      ModalRoot
    );
  }
}
