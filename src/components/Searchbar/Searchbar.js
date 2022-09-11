import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CgSearch } from 'react-icons/cg';
import { Header, SubmitButton, Form, Input } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    query: '',
  };
  handleChange = e => {
    const { value } = e.currentTarget;
    this.setState({
      query: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.query.trim() === '') {
      alert('Enter a search value');
      return;
    }
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;
    return (
      <Header className="searchbar">
        <Form onSubmit={this.handleSubmit}>
          <SubmitButton>
            <CgSearch size="2em" aria-label={'Image search'} />
          </SubmitButton>
          <Input
            onChange={this.handleChange}
            value={query}
            className="input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
};
