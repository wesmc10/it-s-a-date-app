import React from 'react';
import dateFns from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MonthHeader.css';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

export default function MonthHeader(props) {
    const monthAndYear = dateFns.format(props.currentMonth, 'MMMM YYYY');

    return (
        <div className="Month_header">
            <div className="Month_previous">
                <FontAwesomeIcon 
                    icon={faAngleDoubleLeft}
                    onClick={props.prevMonth}
                />
            </div>
            <div className="Month_and_year">
                {monthAndYear}
            </div>
            <div className="Month_next">
                <FontAwesomeIcon 
                    icon={faAngleDoubleRight}
                    onClick={props.nextMonth}
                />
            </div>
        </div>
    )
}