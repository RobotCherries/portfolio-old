import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Pages
import Home from './pages/home/index';
import About from './pages/about/index';
import Projects from './pages/projects/index';
import Blog from './pages/blog/index';
import Contact from './pages/contact/index';

// Resources
import './scss/app.scss';

// Partials
import Header from './partials/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='app'>
            <Header />
          
            <main className='main'>
              <Route path='/' exact component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/blog' component={Blog}/>
              <Route path='/contact' component={Contact}/>
            </main>

          <footer>
            Your copyright message.
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
