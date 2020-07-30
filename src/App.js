import React , {Component} from 'react';
import {
  Route,
  BrowserRoute,
  Switch,
  Redirect,
} from "react-router-dom";
import PrivateRoute from './hoc/Route/PrivateRoute'


import {auth} from './services/firebase'

import Layout from './hoc/Layout/Layout';
import LandingPage from './containers/Landing/LandingPage'
import Home from './containers/Home/Home';
import TutorChat from './containers/Chat/TutorChat';
import Signup from './containers/Signup/Signup';
import Login from './containers/Login/Login';
import Request from './containers/Request/Request'

class App extends Component {

  state = {
    authenticated: false
  };

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if(user) {
        this.setState({
          authenticated: true
        });
        console.log(this.state.authenticated);
      } else {
        this.setState({
          authenticated: false
        });
      }
    })
  }

  render(){
    return (
      <div className="App">
        <Layout authenticated={this.state.authenticated}>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <PrivateRoute path="/chat" component={TutorChat} authenticated={this.state.authenticated}/>
            <PrivateRoute path="/request" component={Request} authenticated={this.state.authenticated} />
            <PrivateRoute path="/home" component={Home} authenticated={this.state.authenticated} />
          </Switch>
        </Layout>
      </div>
    );
  }
 
}

export default App;
