import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import './App.scss';
import Posts from './components/Posts';
import Services from './components/Services';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services/" component={Services} />
            {/* <Route path="/users/" component={Users} /> */}
          </Switch>
        </Router>
      </React.Fragment>
    )
  }

};

export default App;
