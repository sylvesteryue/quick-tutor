import React from 'react';

import classes from './Toolbar.module.css'

import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <nav>
            <NavigationItems authenticated={props.authenticated}/>
        </nav>
    </header>
);
 

export default toolbar;