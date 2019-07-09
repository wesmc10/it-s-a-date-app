import React, { Component } from 'react';
import dateFns from 'date-fns';
import Day from '../Day/Day';
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
                        <Day className={`day_date_column ${!dateFns.isSameMonth(day, firstDayOfMonth)
                            ? 'faded' 
                            : dateFns.isSameDay(day, today)
                                ? 'highlighted' 
                                : ''}`}
                            day={day}
                            id={dateFns.format(day, 'MM DD YYYY')}
                            showModal={this.props.showModal}
                            history={this.props.history}
                            key={dateFns.format(day, 'MM DD YYYY')}
                        />      
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