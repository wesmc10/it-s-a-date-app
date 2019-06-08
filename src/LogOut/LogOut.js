import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LogOut.css';

export default class LogOut extends Component {

    handleLogOutClick = () => {
        console.log('logging out');
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