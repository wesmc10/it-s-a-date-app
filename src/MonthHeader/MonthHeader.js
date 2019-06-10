import React from 'react';
import dateFns from 'date-fns';
import './MonthHeader.css';

export default function MonthHeader() {
    const currentMonth = dateFns.format(new Date(), 'MMMM');
    const currentYear = dateFns.format(new Date(), 'YYYY');

    return (
        <div className="Month_header">
            {currentMonth + ' ' + currentYear}
        </div>
    )
}