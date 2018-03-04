import React, { Component } from 'react';
import '../styles/Main.scss';
import ProductList from './ProductList.jsx';

class Main extends Component {
  render() {
    return (
      <div className="container">
        <ProductList />
      </div>
    );
  }
}

export default Main;
