import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css';
import ItsADateContext from '../ItsADateContext';
import TokenService from '../token-service';

export default class LogOut extends Component {
    static contextType = ItsADateContext;

    handleLogOutClick = () => {
        TokenService.clearAuthToken();
        this.context.addClickedDay('');
        this.context.addCurrentCalendar({});
        this.context.addCurrentUser({});
    }

    render() {

        return (
            <div className="Header_logged_in">
                <Link
                    onClick={this.handleLogOutClick}
                    to='/'
                >
                    Log Out
                </Link>
            </div>
        )
    }
}