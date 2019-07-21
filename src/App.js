import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloProvider} from "react-apollo";
import { createUploadLink } from 'apollo-upload-client';
import {createHttpLink, HttpLink} from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import ApolloClient from "apollo-client";

import Home from './components/Home'
import Contact from './components/contact';
import NewsLetter from './components/newsletter';
import FAQs from './components/faq';
import FaqComponents from './components/faq-topics/faq-topics';
import SupportPage from './components/support-us';
import './assets/stylesheets/App.scss';
import ScrollToTop from './components/Helpers/ScrolltoTop';
import Services from './components/Services';


const app_uri = process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:4000/graphql'
console.log("The app uri: ", app_uri);
const uploadLink = createUploadLink({ uri: app_uri });
const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // link: new HttpLink({uri: app_uri}),
    cache: new InMemoryCache()
});


class App extends React.Component{
  render(){
    return (
      <ApolloProvider client={client}>  
        <React.Fragment>
          <Router>
            <Switch>
              <ScrollToTop>
                {/* Defing all the necessary routes here */}
                <Route path={process.env.PUBLIC_URL} exact component={Home} />
                <Route path="/contact" component={Contact} />
                <Route path="/services" component={Services} />
                <Route path="/support-us" component={SupportPage} />
                <Route path="/newsletter" component={NewsLetter} />
                <Route path="/faqs" exact component={FAQs} />
                <Route path="/faqs/:topicId" component={FaqComponents} />
                <Route path="/posts/:postId" component={FaqComponents} />
              </ScrollToTop>
            </Switch>
          </Router>
        </React.Fragment>
      </ApolloProvider>
    )
  }

};

export default App;
