import React from 'react';
import MonthHeader from '../MonthHeader/MonthHeader';
import './Month.css';
import DaysOfTheWeek from '../DaysOfTheWeek/DaysOfTheWeek';
import MonthDateSection from '../MonthDateSection/MonthDateSection';

export default function Month() {
    return (
        <div className="Month">
            <div className="Month_year">
                <MonthHeader />
            </div>
            <div className="Day_names">
                <DaysOfTheWeek />
            </div>
            <div className="Day_dates">
                <MonthDateSection />
            </div>
        </div>
    )
}