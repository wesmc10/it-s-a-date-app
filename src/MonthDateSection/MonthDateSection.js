import React from 'react';
import dateFns from 'date-fns';
import './MonthDateSection.css';

export default function MonthDateSection() {
    const firstDayOfMonth = dateFns.startOfMonth(new Date());
    const lastDayOfMonth = dateFns.endOfMonth(new Date());
    const firstDayOnCalendar = dateFns.startOfWeek(firstDayOfMonth);
    const lastDayOnCalendar = dateFns.endOfWeek(lastDayOfMonth);
    const daysOfTheMonth = [];

    for (let i = 0; i < dateFns.format(lastDayOfMonth, 'D'); i++) {
        daysOfTheMonth.push(
            <div className="day_date_column" key={i}>
                {dateFns.format(dateFns.addDays(firstDayOfMonth, i), 'D')}
            </div>            
        )
    }

    return (
        <div className="Month_date_section">
            {daysOfTheMonth}
        </div>
    )
}