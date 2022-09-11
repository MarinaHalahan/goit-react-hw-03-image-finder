import React, { Component } from 'react';
import { Backdrop, ModalWrapp } from './Modal.styled';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };
  render() {
    return (
      <Backdrop onClick={this.props.onClick}>
        <ModalWrapp>
          <img src={this.props.children} alt="" />
        </ModalWrapp>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  onClick: PropTypes.func,
};
