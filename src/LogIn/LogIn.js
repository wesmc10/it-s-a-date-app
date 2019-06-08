import React, { Component } from 'react';
import './LogIn.css';

export default class LogIn extends Component {
    state = {
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
                    <div>
                        Login
                        <label htmlFor="username">
                            User Name
                        </label>
                        <input 
                            type="text"
                            id="username"
                            name="username"
                            required
                        />
                        <label htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required 
                        />
                    </div>
                </form>
            </div>
        )
    }
}