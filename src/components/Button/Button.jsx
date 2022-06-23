import React from 'react';
import { ButtonStyle } from './Button.styled';

export default class Button extends React.Component {
  render() {
    return <ButtonStyle onClick={this.props.onClick}>Load more</ButtonStyle>;
  }
}
