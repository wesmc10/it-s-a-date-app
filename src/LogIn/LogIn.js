import React, { Component } from 'react';
import './LogIn.css';

export default class LogIn extends Component {

    state = {
        userName: '',
        password: '',
        error: null
    };

    render() {
        const { error } = this.state;

        return (
            <div className="Login">
                <form className="Login_form">
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