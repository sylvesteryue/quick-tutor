import React, {Component} from 'react';

import Button from '@material-ui/core/Button';

import classes from './LoginForm.module.css';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        //console.log(this.state.email, this.state.password);
        let submitEmail = this.state.email;
        let submitPasswd = this.state.password;
        this.props.enterEmailPassword(submitEmail, submitPasswd);
        
    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Log in</h1>
                    <div>
                        <input placeholder="Email" type="email" onChange={this.handleChange} value={this.state.email} name="email"></input>
                    </div>

                    <div>
                        <input placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password} name="password"></input>
                    </div>
                    
                    <div>
                        <Button variant="contained" color="primary" type="submit">Log in</Button>
                    </div>
                </form>
            </div>
        );
    }

}

// const loginForm = (props) => (
//     <div>
//         <form onSubmit={() => props.enterEmailPassword()}>
//             <h1>Log in</h1>
//             <div>
//                 <input placeholder="Email" type="email" onChange={this.handleChange} value={this.state.email}></input>
//             </div>

//             <div>
//                 <input placeholder="Password" type="password" onChange={this.handleChange} value={this.state.password}></input>
//             </div>
            
//             <div>
//                 <button type="submit">Log in</button>
//             </div>
//         </form>
//     </div>
// );



export default LoginForm;






