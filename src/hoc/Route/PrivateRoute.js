import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';


const privateRoute = ({component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest} 
        render={(props) => props.authenticated === true 
            ? <Component {...props}/>
            : <Redirect to={{ pathname: '/login', state: {from: props.location} }}/>}/>
);

export default privateRoute;