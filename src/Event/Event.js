import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import convertTime from 'convert-time';
import './Event.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Event extends Component {
    static contextType = ItsADateContext;

    componentDidMount() {
        if (!TokenService.hasAuthToken()) {
            this.props.history.push('/');
        }
    }

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
        let userEvents = sessionStorage.getItem('userEvents');
        userEvents = JSON.parse(userEvents);
        const currentEvent = userEvents && userEvents.find(event => event.id === parseInt(this.props.match.params.eventId));
        const { id } = this.context.currentUser;

        return (
            <div className="Event_view">
                <header className="Event_view_header">
                    <LogOut />
                </header>
                <section className="Event_icon_section">
                    <div className="Event_edit_button Tooltip_edit">
                        <Link to={`/${currentEvent && currentEvent.id}/edit-event`}>
                            <span className="Event_edit_icon">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                />
                                <span className="Tooltip_edit_event_text">
                                    Edit Event
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="Event_delete_button Tooltip_delete">
                        <Link to={`/${id}/calendar`} onClick={this.handleDeleteEvent}>
                            <span className="Event_delete_icon">
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                />
                                <span className="Tooltip_delete_event_text">
                                    Delete Event
                                </span>
                            </span>
                        </Link>
                    </div>
                </section>
                <section className="Event_view_name">
                    <h1 className="Event_name">{currentEvent && currentEvent.event_name}</h1>
                </section>
                <section className="Event_view_description">
                    <h2 className="section_tag">Description</h2>
                    <p className="section_description paragraph">
                        {currentEvent && currentEvent.description}
                    </p>
                </section>
                <section className="Event_view_time">
                    <h2 className="section_tag">Time</h2>
                    <p className="section_time paragraph">
                        {currentEvent && convertTime(currentEvent.event_time, 'hh:MM A')}
                    </p>
                </section>
                <section className="Event_view_location">
                    <h2 className="section_tag">Location</h2>
                    <p className="location_description paragraph">
                        {currentEvent && currentEvent.location}
                    </p>
                </section>
                {currentEvent && currentEvent.other
                    ?   <section className="Event_view_other">
                            <h2 className="section_tag">Other</h2>
                            <p className="section_description paragraph">
                                {currentEvent.other}
                            </p>
                        </section>
                    : ''
                }
                <button type="reset" className="Event_back_button" onClick={this.onClickBack}>
                    Back
                </button>
            </div>
        )
    }
}