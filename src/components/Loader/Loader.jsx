import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export default class Loader extends React.Component {
  render() {
    return (
      <ThreeDots height="100" width="100" color="grey" ariaLabel="loading" />
    );
  }
}
