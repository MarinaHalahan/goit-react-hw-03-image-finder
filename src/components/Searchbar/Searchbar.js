import React, { Component } from 'react';
// import { toast } from 'react-toastify';
import {
  Header,
  SubmitButton,
  ButtonLabel,
  Form,
  Input,
} from './Searchbar.styled';

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
      alert('Введите значение для поиска');
      //   toast(' Wow so easy!');
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
            <ButtonLabel>Search</ButtonLabel>
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
