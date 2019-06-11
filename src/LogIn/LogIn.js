import React, { Component } from 'react';
import ItsADateContext from '../ItsADateContext';
import './LogIn.css';

export default class LogIn extends Component {

    state = {
        userName: '',
        password: '',
        error: null
    };

    static contextType = ItsADateContext;

    handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = this.state;

        const user = this.context.users.find(user => user.userName === userName);
        if (user === undefined) {
            console.log('Username is incorrect');
        } else {
            if (user.password === password) {
                this.context.addCurrentUser(user);
                this.props.history.push(`/${user.id}/calendar`)
            } else {
                console.log('Password is incorrect');
            }
        }
    }

    handleChangeUserName = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    handleChangePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { error } = this.state;

        return (
            <div className="Login">
                <form className="Login_form" onSubmit={this.handleSubmit}>
                    <div role="alert">
                        {error && <p className="red">{error}</p>}
                    </div>
                    <div className="Login_form_user_name">
                        <label htmlFor="Login_user_name">
                            User Name
                        </label>
                        <input 
                            type="text"
                            id="Login_user_name"
                            name="Login_user_name"
                            required
                            onChange={this.handleChangeUserName}
                        />
                    </div>
                    <div className="Login_form_password">
                        <label htmlFor="Login_password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="Login_password"
                            name="Login_password"
                            required 
                            onChange={this.handleChangePassword}
                        />
                    </div>
                    <button type="submit" className="Login_button">
                        Log In
                    </button>
                </form>
            </div>
        )
    }
}