import React, {Component} from 'react';

import Title from '../../components/Chat/Title/Title'
import MessagesList from '../../components/Chat/MessagesList/MessagesList'
import SendMessage from '../../components/Chat/SendMessage/SendMessage'



class TutorChat extends Component {

    constructor() {
        super();
        this.state = {
            question: 'I suck at math!!',
            messages: [
                {
                    senderId: 'yue4ria',
                    text: 'How it be',
                    isUser: true
                },
                {
                    senderId: 'ShadowSentinel',
                    text: 'really do',
                    isUser: false
                },
                {
                    senderId: 'yue4ria',
                    text: 'math is hard please help',
                    isUser: true
                }
            ]
        };
    }


    render() {
        return(
            <div>
                <Title title={this.state.question}/>
                <MessagesList messages={this.state.messages}/>
                <SendMessage/>
            </div>
        );
    }

}



export default TutorChat;






