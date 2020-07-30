import React, { Component } from 'react';

import {auth} from '../../services/firebase';

import Button from '@material-ui/core/Button'

class Home extends Component {
    

    constructor(props) {
        super(props);
        this.user = auth().currentUser;
    }

    logOut() {

        auth().signOut().then(function() {
            this.props.history.push("/");
          }).catch(function(error) {
            console.log(error.message);
          });
    }


    render() {
        return(
            <div>
                <h1>Welcome to QuickTutor, {this.user.email}!</h1>
                <Button variant="contained" color="danger" type="submit" onClick={this.logOut}>Log out</Button>
            </div>
        );
    }
    
    
};


export default Home;