import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dateFns from 'date-fns';
import './MonthDateSection.css';
import ItsADateContext from '../ItsADateContext';

export default class MonthDateSection extends Component {
    static contextType = ItsADateContext;

    render() {
        const today = new Date();
        const firstDayOfMonth = dateFns.startOfMonth(this.props.currentMonth);
        const lastDayOfMonth = dateFns.endOfMonth(this.props.currentMonth);
        const firstDayOnTheCalendar = dateFns.startOfWeek(firstDayOfMonth);
        const lastDayOnTheCalendar = dateFns.endOfWeek(lastDayOfMonth);

        let daysOfTheMonth = [];
        let day = firstDayOnTheCalendar;
        const rows = [];

        while (day <= lastDayOnTheCalendar) {
            for (let i = 0; i < 7; i++) {
                daysOfTheMonth.push(
                    <Link to={`/${this.context.currentUser.id}/create-event`} key={i}>
                        <div className={`day_date_column ${!dateFns.isSameMonth(day, firstDayOfMonth)
                            ? 'faded' 
                            : dateFns.isSameDay(day, today)
                                ? 'selected' 
                                : ''}`}
                        >
                            {dateFns.format(day, 'D')}
                        </div> 
                    </Link>           
                );
                day = dateFns.addDays(day, 1);
            }

            rows.push(
                <div className="week_row" key={day}>
                    {daysOfTheMonth}
                </div>
            );
            daysOfTheMonth = [];
        }

        return (
            <div className="Month_date_section">
                {rows}
            </div>
        )
    }
}