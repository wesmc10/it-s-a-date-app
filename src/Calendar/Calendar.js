import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import Month from '../Month/Month';
import './Calendar.css';

export default class Calendar extends Component {

    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    render() {
        return (
            <div className="Calendar_view">
                <header className="Calendar_view_header">
                    <LogOut />
                </header>
                <section className="Calendar_view_calendar">
                    <Month />
                </section>
            </div>
        )
    }
}