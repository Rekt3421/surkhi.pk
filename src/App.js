import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home'
import './App.scss';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Services from './components/Services';
import Dashboard from './components/dashboard';

class App extends React.Component{
  render(){
    return (
      <BrowserRouter>
      <div className="app-container">
        <Navbar />
        <Home />
        <Dashboard />
      </div>
      <Route path="/" exact component={Home} />
      <Route path="/services/" component={Services} />
      {/* <Route path="/users/" component={Users} /> */}
      </BrowserRouter>
    )
  }

};

export default App;
