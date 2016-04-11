import React from 'react';
import Navbar from './Navbar';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.resetClick = this.resetClick.bind(this);
  }

  resetClick() {
    console.log('reset');
  }

  render() {
    return (
      <Navbar onReset={this.resetClick} />
    );
  }
}
