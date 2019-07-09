import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import convertTime from 'convert-time';
import './Event.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class Event extends Component {
    static contextType = ItsADateContext;

    onClickBack = () => {
        this.props.history.goBack();
    }

    handleDeleteEvent = (e) => {
        e.preventDefault();
        const { eventId } = this.props.match.params;

        fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            this.props.history.push(`/${this.context.currentCalendar.id}/calendar`);
            this.context.deleteEvent(eventId);

            if (!res.ok) {
                throw new Error(res.statusText);   
            }
        })
        .catch(error => {
            console.error(error);
        })
    }

    render() {
        const { userEvents } = this.context;
        const currentEvent = userEvents.find(event => event.id === parseInt(this.props.match.params.eventId));
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
                    <h1 className="Event_name">{currentEvent.event_name}</h1>
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
                        {convertTime(currentEvent.event_time, 'hh:MM A')}
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