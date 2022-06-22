import React from 'react';

export default class ImageGallery extends React.Component {
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.image.webformatURL} alt={this.props.image.tags} />
      </li>
    );
  }
}
