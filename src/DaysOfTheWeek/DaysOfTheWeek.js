import React from 'react';
import dateFns from 'date-fns';
import './DaysOfTheWeek.css';

export default function DaysOfTheWeek() {
    const firstDayOfWeek = dateFns.startOfWeek(new Date());
    const daysOfTheWeek = [];

    for (let i = 0; i < 7; i++) {
        daysOfTheWeek.push(
            <div className="day_name_column" key={i}>
                {dateFns.format(dateFns.addDays(firstDayOfWeek, i), 'ddd')}
            </div>
        );
    }

    return (
        <div className="Days_of_week">
            {daysOfTheWeek}
        </div>
    )
}