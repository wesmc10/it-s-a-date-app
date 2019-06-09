import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './Calendar.css';

export default class Calendar extends Component {
    render() {
        return (
            <div className="Calendar_view">
                <header className="Calendar_view_header">
                    <LogOut />
                </header>
            </div>
        )
    }
}