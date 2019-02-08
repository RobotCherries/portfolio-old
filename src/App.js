import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Resources
import './app.scss';

// Partials
import Header from './partials/header';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Header />
        </BrowserRouter>

        <footer>
          Your copyright message.
        </footer>
      </div>
    );
  }
}

export default App;
