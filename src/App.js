import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/home/index';
import About from './pages/about/index';
import Design from './pages/design/index';
import Blog from './pages/blog/index';
import Contact from './pages/contact/index';
import Development from './pages/development';

// Resources
import './scss/app.scss';

// Partials
import Header from './partials/header';
import Footer from './partials/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
            <Header />
          
            <main className='main'>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/development' component={Development}/>
              <Route path='/design' component={Design}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/contact' component={Contact}/>
            </main>

            <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
