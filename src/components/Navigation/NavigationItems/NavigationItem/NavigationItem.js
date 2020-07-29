import React from 'react';

import {Link} from 'react-router-dom';


import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        {/* <a href={props.link}>{props.children}</a> */}
        <Link to={props.link}><p>{props.children}</p></Link>
    </li>

);

export default navigationItem;