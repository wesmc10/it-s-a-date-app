import React, { Component } from 'react';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';
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
        this.setState({
            error: null
        });
        const { userName, password } = this.state;

        fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user_name: userName,
                password
            })
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(res => {
            this.setState({
                userName: '',
                password: ''
            });
            this.context.addCurrentUser(res.dbUser);
            if (!!res.dbCalendar) {
                this.context.addCurrentCalendar(res.dbCalendar);
                this.context.addUserEvents(res.dbEvents);
                TokenService.saveAuthToken(res.authToken);
                this.props.history.push('/calendar');
            } else {
                TokenService.saveAuthToken(res.authToken);
                this.props.history.push('/create-calendar');
            }
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
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
                    <div className="Login_flex_container">
                        <div className="Login_form_user_name">
                            <label htmlFor="Login_user_name" className="Login_label_user_name">
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
                            <label htmlFor="Login_password" className="Login_label_password">
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
                    </div>
                </form>
            </div>
        )
    }
}