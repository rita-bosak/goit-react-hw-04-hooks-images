import React from 'react';
import PropTypes from 'prop-types';
import { MessageStyle } from './Message.styled';

const Message = ({ message }) => <MessageStyle>{message}</MessageStyle>;

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
