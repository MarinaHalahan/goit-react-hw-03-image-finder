import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { ButtonMore } from './Button/Button';
import { fetchImage } from '../services/api';
import { Loader } from './Loader/Loader';
import Modal from './Modal/Modal';

export class App extends Component {
  state = {
    total: null,
    page: 1,
    query: '',
    images: [],
    error: null,
    loading: false,
    largeImg: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    try {
      const { page, query } = this.state;

      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ loading: true });

        const data = await fetchImage(page, query);
        const images = data.hits;

        if (images.length === 0) {
          alert('Nothing was found for your request');
          this.setState({ loading: false });
          return;
        }

        this.setState(prevState => ({
          total: data.totalHits,
          images: [...prevState.images, ...images],
          loading: false,
          error: null,
        }));
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

  openLargeImg = e => {
    const { src } = e.target;

    this.state.images.find(image => {
      if (image.webformatURL === src) {
        this.setState({ largeImg: image.largeImageURL });
        return image;
      }
    });
  };

  closeModal = () => {
    this.setState({ largeImg: null });
  };

  render() {
    const { images, error, loading, largeImg } = this.state;
    return (
      <div className="app">
        {largeImg && <Modal onClick={this.closeModal}>{largeImg}</Modal>}
        <Searchbar onSubmit={this.addSearchWord} />
        {error && <span>"Try again later"</span>}
        {loading && <Loader />}

        <ImageGallery
          onClick={this.openLargeImg}
          images={images}
        ></ImageGallery>
        {images.length > 0 && (
          <ButtonMore onClick={this.addOnePage}></ButtonMore>
        )}
      </div>
    );
  }
}
