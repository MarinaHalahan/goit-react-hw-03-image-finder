import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';

// import styled from 'styled-components';
// import PropTypes from 'prop-types';
import Searchbar from './Searchbar/Searchbar';
import { ButtonMore } from './Button/Button';
import { fetchImage } from '../services/api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    total: null,
    page: 1,
    query: '',
    images: [],
    error: null,
    loading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { page, query } = this.state;

      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ loading: true });

        const data = await fetchImage(page, query);
        const images = data.hits;

        if (images.length === 0) {
          alert('По Вашему запросу ничего не найдено');
          this.setState({ loading: false });
          return;
        }
        this.setState(prevState => ({
          total: data.totalHits,
          images: [...prevState.images, ...images],
        }));
        this.setState({ loading: false });
      }
    } catch (error) {
      this.setState({ error: error });
      console.log(error);
    }
  }

  addSearchWord = ({ query }) => {
    this.setState({ page: 1, query, images: [] });
  };

  addOnePage = () => {
    if (this.state.page < this.state.total / 12) {
      this.setState(prevState => ({ page: prevState.page + 1 }));
    }
  };

  render() {
    const { images, error, loading } = this.state;
    return (
      <div className="app">
        <Searchbar onSubmit={this.addSearchWord} />
        {error && <span>"Try again later"</span>}
        {loading && <Loader />}

        <ImageGallery images={images}></ImageGallery>
        {images.length > 0 && (
          <ButtonMore onClick={this.addOnePage}></ButtonMore>
        )}
        {/* <ToastContainer /> */}
      </div>
    );
  }
}
