import React from 'react';
import dateFns from 'date-fns';
import './Day.css';

export default function Day() {
    const currentDay = dateFns.format(new Date(), 'DD');

    return (
        <div className="Day">
            <div className="Day_current">
                {currentDay}
            </div>
        </div>
    )
}