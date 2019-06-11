import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import Month from '../Month/Month';
import dateFns from 'date-fns';
import './Calendar.css';
import ItsADateContext from '../ItsADateContext';

export default class Calendar extends Component {

    state = {
        currentMonth: new Date()
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        const { userId } = this.props.match.params;
        const currentCalendar = this.context.calendars.find(calendar => calendar.userId === userId);

        this.context.addCurrentCalendar(currentCalendar);
    }

    handlePreviousMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    handleNextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    render() {
        return (
            <div className="Calendar_view">
                <header className="Calendar_view_header">
                    <LogOut />
                </header>
                <section className="Calendar_view_calendar">
                    <Month 
                        prevMonth={this.handlePreviousMonth}
                        nextMonth={this.handleNextMonth}
                        currentMonth={this.state.currentMonth}
                    />
                </section>
            </div>
        )
    }
}