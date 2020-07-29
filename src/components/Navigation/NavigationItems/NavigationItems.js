import React from 'react';

import classes from './NavigationItems.module.css'

import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {

    let routes;

    if(!props.authenticated) {
        routes = [
            {link: "/login", name: "Login"},
            {link: "/signup", name: "Sign Up"}
        ]
    } else {
        routes = [
            {link: "/request", name: "Request"},
            {link: "/chat", name: "Chat"}
        ]
    }
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/">Home</NavigationItem>
            {routes.map((routeData, index) => {
                return <NavigationItem key={index} link={routeData.link}>{routeData.name}</NavigationItem>
            })}
        </ul>
    );
    
};

export default navigationItems;