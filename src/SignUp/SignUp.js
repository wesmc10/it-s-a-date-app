import React, { Component } from 'react';
import './SignUp.css';
import ItsADateContext from '../ItsADateContext';
import uuid from 'uuid';

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
        const { firstName, lastName, userName, password } = this.state;

        const id = uuid();
        const newUser = {
            id,
            firstName,
            lastName,
            userName,
            password
        };

        this.context.addUser(newUser);
        this.context.addCurrentUser(newUser);
        this.props.history.push(`/${id}/create-calendar`);
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