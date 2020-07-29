import React from 'react';

import classes from './MessagesList.module.css'

import Message from './Message/Message';


const messagesList = (props) => (
    <div className={classes.MessagesList}>
        {props.messages.map((message, index) => {
            return(
                <Message message={message} key={index}/>
                
            );
        })}
    </div>



);


export default messagesList;