import React, { Component } from 'react';
import dateFns from 'date-fns';
import './Day.css';
import ItsADateContext from '../ItsADateContext';

export default class Day extends Component {
    static contextType = ItsADateContext;

    handleClickedDayAndModal = () => {
        const dayId = this.props.id;
        const { userEvents } = this.context;
        this.context.addClickedDay(dayId);

        // if the user clicks on a day that has events, show modal
        // otherwise, go to create event component
        userEvents && userEvents.filter(event => event.day_id === dayId).length
            ? this.props.showModal()
            : this.props.history.push('/create-event');
    }

    render() {
        const dayId = this.props.id;
        const { userEvents } = this.context;

        return (
            <div className={this.props.className} onClick={this.handleClickedDayAndModal}>
                <span className="Event_alert">
                    {userEvents && userEvents.filter(event => event.day_id === dayId).length
                        ? userEvents.filter(event => event.day_id === dayId).length 
                        : ''}
                </span>
                {dateFns.format(this.props.day, 'D')}
            </div>
        )
    }
}