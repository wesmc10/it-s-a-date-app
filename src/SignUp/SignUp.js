import React, { Component } from 'react';
import './SignUp.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class SignUp extends Component {

    state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        error: null
    };

    static contextType = ItsADateContext;

    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { firstName, lastName, userName, password } = this.state;

        fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
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
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            });
            TokenService.saveAuthToken(res.authToken);
            this.context.addCurrentUser(res.user);
            this.props.history.push(`/${res.user.id}/create-calendar`);
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
    }

    handleFirstNameChange = (e) => {
        this.setState({
            firstName: e.target.value
        });
    }

    handleLastNameChange = (e) => {
        this.setState({
            lastName: e.target.value
        });
    }

    handleUserNameChange = (e) => {
        this.setState({
            userName: e.target.value
        });
    }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    render() {
        const { error } = this.state;
        return (
            <div className="Signup">
                <form className="Signup_form" onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Create an Account</legend>
                        <div role="alert">
                            {error && <p className="red">{error}</p>}
                        </div>
                        <div className="Signup_form_first_name">
                            <label htmlFor="Signup_first_name">
                                First Name
                            </label>
                            <input
                                id="Signup_first_name"
                                type="text"
                                name="Signup_first_name"
                                required
                                onChange={this.handleFirstNameChange}
                            />
                        </div>
                        <div className="Signup_form_last_name">
                            <label htmlFor="Signup_last_name">
                                Last Name
                            </label>
                            <input
                                id="Signup_last_name"
                                type="text"
                                name="Signup_last_name"
                                required
                                onChange={this.handleLastNameChange}
                            />
                        </div>
                        <div className="Signup_form_user_name">
                            <label htmlFor="Signup_user_name">
                                User Name
                            </label>
                            <input
                                id="Signup_user_name"
                                type="text"
                                name="Signup_user_name"
                                required
                                onChange={this.handleUserNameChange}
                            />
                        </div>
                        <div className="Signup_form_password">
                            <label htmlFor="SIgnup_password">
                                Password
                            </label>
                            <input
                                id="Signup_password"
                                type="password"
                                name="Signup_password"
                                required
                                onChange={this.handlePasswordChange}
                            />
                        </div>
                        <button type="submit">
                            Sign Up
                        </button>
                    </fieldset>
                </form>
            </div>
        )
    }
}