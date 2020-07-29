import React from 'react';

import classes from './Title.module.css'

const title = (props) => (
    <div className={classes.Title}>
        {props.title}
    </div>


);


export default title;