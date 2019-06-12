import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css';
import ItsADateContext from '../ItsADateContext';

export default class LogOut extends Component {
    static contextType = ItsADateContext;

    handleLogOutClick = () => {
        this.context.addClickedDay('');
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