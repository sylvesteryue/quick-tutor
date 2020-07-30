import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';

import {auth} from '../../services/firebase';


const privateRoute = ({component: Component, authenticated, ...rest}) => {
    let user = auth().currentUser;
    console.log(user);
    return (
        <Route 
        {...rest} 
        render={(props) =>( user
            ?  <Component {...props}/>
            : <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>)}/>
    );
    
};

export default privateRoute;