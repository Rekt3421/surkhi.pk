import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home'
import SubmitTopic from './components/submit-topic';
import SupportPage from './components/support-us';
import './assets/stylesheets/App.scss';
import ScrollToTop from './components/Helpers/ScrolltoTop';
import Services from './components/Services';

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <ScrollToTop>
              {/* Defing all the necessary routes here */}
              <Route path="/" exact component={Home} />
              <Route path="/submit-topic" component={SubmitTopic} />
              <Route path="/services" component={Services} />
              <Route path="/support-us" component={SupportPage} />
            </ScrollToTop>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }

};

export default App;
