import React from 'react';
import classes from './Message.module.css'

import cx from 'classnames'


const message = (props) =>{ 

    let messageBoxClass = cx(classes.MessageBox, {
                                                [classes.CurrentUser]: props.message.isUser, 
                                               [classes.OtherUser]: !props.message.isUser});

    return(
        <div className={messageBoxClass}>
            <div className={classes.BubbleContainer}>
                <div className={classes.Bubble} title={props.message.senderId}>{props.message.text}</div>
            </div>     
        </div>
    );

    



};


export default message;