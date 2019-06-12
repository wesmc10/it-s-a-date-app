import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import dateFns from 'date-fns';
import './Event.css';
import ItsADateContext from '../ItsADateContext';

export default class Event extends Component {
    static contextType = ItsADateContext;

    onClickBack = () => {
        this.props.history.goBack();
    }

    handleDeleteEvent = () => {
        const { eventId } = this.props.match.params;
        this.context.deleteEvent(eventId);
    }

    render() {
        const { events } = this.context;
        const currentEvent = events.find(event => event.id === this.props.match.params.eventId);
        const { id } = this.context.currentUser;

        return (
            <div className="Event_view">
                <header className="Event_view_header">
                    <LogOut />
                </header>
                <div className="Event_edit_link">
                    <Link to={`/${currentEvent.id}/edit-event`}>
                        Edit Event
                    </Link>
                </div>
                <div className="Event_delete_link">
                    <Link to={`/${id}/calendar`} onClick={this.handleDeleteEvent}>
                        Delete Event
                    </Link>
                </div>
                <section className="Event_view_name">
                    <h1 className="Event_name">{currentEvent.name}</h1>
                </section>
                <section className="Event_view_description">
                    <h2 className="section_tag">Description</h2>
                    <p className="section_description">
                        {currentEvent.description}
                    </p>
                </section>
                <section className="Event_view_time">
                    <h2 className="section_tag">Time</h2>
                    <p className="section_time">
                        {dateFns.format(currentEvent.time, 'hh:mm A')}
                    </p>
                </section>
                <section className="Event_view_location">
                    <h2 className="section_tag">Location</h2>
                    <p className="location_description">
                        {currentEvent.location}
                    </p>
                </section>
                {currentEvent.other
                    ?   <section className="Event_view_other">
                            <h2 className="section_tag">Other</h2>
                            <p className="section_description">
                                {currentEvent.other}
                            </p>
                        </section>
                    : ''
                }
                <section className="Event_button">
                    <button type="reset" onClick={this.onClickBack}>
                        Back
                    </button>
                </section>
            </div>
        )
    }
}