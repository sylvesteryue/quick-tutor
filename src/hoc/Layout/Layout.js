import React from 'react';

import classes from './Layout.module.css';

import Aux from '../Auxilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar authenticated={props.authenticated}/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;