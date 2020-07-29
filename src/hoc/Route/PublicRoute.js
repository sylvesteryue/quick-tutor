import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';


const publicRoute = ({component: Component, authenticated, ...rest}) => (
    <Route 
        {...rest} 
        render={(props) => authenticated === false 
            ? <Component {...props}/>
            : <Redirect to='/request'/>}></Route>
);

export default publicRoute;