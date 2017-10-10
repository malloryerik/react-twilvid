import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history'
import About from "./About/About"
import InstructorRTC from "./Instructor/InstructorRTC.js"
import Playground from "./Playground/Playground.js"

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
          <Route path="/about" render={(props) => <About auth={auth} {...props} />} />
          <Route path="/instructorRTC" render={(props) => <InstructorRTC auth={auth} {...props} />} />
          <Route path="/playground" render={(props) => <Playground auth={auth} {...props} />} />
          <Route path="/learnerRTC" render={(props) => <learnerRTC auth={auth} {...props} />} />
        </div>
      </Router>
  );
}