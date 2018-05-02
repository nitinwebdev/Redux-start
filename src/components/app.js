import React, { Component } from 'react';

import Booklist from '../containers/booklist';
import BookDeatils from '../containers/book-details';
export default class App extends Component {
  render() {
    return (
      <div><Booklist />
      <BookDeatils /></div>
    );
  }
}
