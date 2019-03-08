import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

class App extends Component {
  render() {
    return ( 
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/Projects' component={Projects}/>
          <Route path='/Contact' component={Contact}/>
          <Route path='/About' component={About}/>
          </React.Fragment> 
      </BrowserRouter>
    );
  }
}

export default App;