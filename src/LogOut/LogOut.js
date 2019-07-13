import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css';
import ItsADateContext from '../ItsADateContext';
import TokenService from '../token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

export default class LogOut extends Component {
    static contextType = ItsADateContext;

    handleLogOutClick = () => {
        this.context.addClickedDay('');
        this.context.addCurrentCalendar({});
        this.context.addCurrentUser({});
        this.context.addUserEvents({});
        TokenService.clearStorage();
    }

    render() {

        return (
            <div className="Header_logged_in">
                <span className="Calendar_icon_header">
                    <FontAwesomeIcon
                        icon={faCalendarAlt}
                    />
                </span>
                <Link
                    className="LogOut_link"
                    onClick={this.handleLogOutClick}
                    to='/'
                >
                    Log Out
                </Link>
            </div>
        )
    }
}