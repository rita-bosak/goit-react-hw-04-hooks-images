import React from 'react';
import { createPortal } from 'react-dom';

const ModalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
  render() {
    return createPortal(
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>,
      ModalRoot
    );
  }
}
