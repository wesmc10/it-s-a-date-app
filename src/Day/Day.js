import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Day.css';
import ItsADateContext from '../ItsADateContext';

export default class Day extends Component {
    static contextType = ItsADateContext;

    handleClickedDayAndModal = (e) => {
        const dayId = this.props.id;
        const userId = this.context.currentUser.id;
        const { events } = this.context;
        this.context.addClickedDay(dayId);

        events.filter(event => event.dayId === dayId).length
            ? this.props.showModal()
            : this.props.history.push(`/${userId}/create-event`);
    }

    render() {
        const dayId = this.props.id;
        const { events } = this.context;

        return (
            <div className={this.props.className} onClick={this.handleClickedDayAndModal}>
                <span className="Event_alert">
                    {events.filter(event => event.dayId === dayId).length
                        ? events.filter(event => event.dayId === dayId).length 
                        : ''}
                </span>
                {dateFns.format(this.props.day, 'D')}
            </div>
        )
    }
}