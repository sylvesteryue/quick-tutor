import React, {Component} from 'react';

import classes from "./SendMessage.module.css"


class SendMessage extends Component {
    constructor(){
        super()
        this.state = {
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);

    }

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`; 
        // In case you have a limitation
        // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
      }

    handleChange(e){
        this.setState({
            message: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.sendMessage(this.state.message);
        this.setState({
            message: ''
        })
    }

    render() {
        return(
            <div className={classes.SendMessageForm}>
                <form onSubmit={this.handleSubmit}>
                    {/* <textarea row="1" onChange={this.handleChange} value={this.state.message} placeholder="Type a message..." onKeyDown={this.handleKeyDown}></textarea> */}
                    <input value={this.state.message} onChange={this.handleChange} placeholder="Type a message..."></input>
                </form>
            </div>
            
        );
    }





}


export default SendMessage;