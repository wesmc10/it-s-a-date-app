import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './EditEvent.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class EditEvent extends Component {

    state = {
        name: '',
        description: '',
        time: '',
        location: '',
        other:'',
        error: null
    };

    static contextType = ItsADateContext;

    static defaultProps = {
        match: {
            params: () => {}
        }
    };

    componentDidMount() {
        const { eventId } = this.props.match.params;
        let currentEvents = sessionStorage.getItem('userEvents');
        currentEvents = JSON.parse(currentEvents);
        const currentEvent = currentEvents && currentEvents.find(event => event.id === parseInt(eventId));

        this.setState({
            name: currentEvent ? currentEvent.event_name : '',
            description: currentEvent ? currentEvent.description : '',
            time: currentEvent ? currentEvent.event_time : '',
            location: currentEvent ? currentEvent.location: '',
            other: currentEvent ? currentEvent.other : ''
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { name, description, time, location, other } = this.state;
        const calendarId = this.context.currentCalendar.id;
        const { eventId } = this.props.match.params;

        fetch(`${config.API_ENDPOINT}/events/${eventId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                event_name: name,
                description,
                event_time: time,
                location,
                other
            })
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } throw new Error(res.statusText);
        })
        .then(res => {
            this.setState({
                name: '',
                description: '',
                time: '',
                location: '',
                other: ''
            });
            this.context.updateEvent(res.event);
            this.props.history.push(`/${calendarId}/calendar`);
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
    }

    handleNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleDescriptionChange = (e) => {
        this.setState({
            description: e.target.value
        });
    }

    handleTimeChange = (e) => {
        this.setState({
            time: e.target.value
        });
    }

    handleLocationChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleOtherChange = (e) => {
        this.setState({
            other: e.target.value
        });
    }

    handleClickCancel = () => {
        this.props.history.goBack();
        this.context.addClickedDay('');
    }

    render() {
        const { name, description, time, location, other, error } = this.state;

        return (
            <div className="Edit_event">
                <header className="Edit_event_header">
                    <LogOut />
                </header>
                <div className="Edit_event_flex_container">
                    <section>
                        <h1 className="Edit_event_title">Edit Event</h1>
                    </section>
                    <section>
                        <form className="Edit_event_form" onSubmit={this.handleSubmit}>
                            <div role="alert">
                                {error && <p className="red">{error}</p>}
                            </div>
                            <div className="Edit_event_form_name">
                                <label htmlFor="Edit_event_name" className="Edit_event_name_label">
                                    Name
                                </label>
                                <input
                                    id="Edit_event_name"
                                    type="text"
                                    name="Edit_event_name"
                                    required
                                    value={name}
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="Edit_event_form_description">
                                <label htmlFor="Edit_event_description" className="Edit_event_description_label">
                                    Description
                                </label>
                                <textarea
                                    id="Edit_event_description"
                                    name="Edit_event_description"
                                    rows='6'
                                    cols='40'
                                    required
                                    value={description}
                                    onChange={this.handleDescriptionChange}
                                />
                            </div>
                            <div className="Edit_event_form_time">
                                <label htmlFor="Edit_event_time" className="Edit_event_time_label">
                                    Time
                                </label>
                                <input
                                    id="Edit_event_time"
                                    type="time"
                                    name="Edit_event_time"
                                    required
                                    value={time}
                                    onChange={this.handleTimeChange}
                                />
                            </div>
                            <div className="Edit_event_form_location">
                                <label htmlFor="Edit_event_location" className="Edit_event_location_label">
                                    Location
                                </label>
                                <input
                                    id="Edit_event_location"
                                    type="text"
                                    name="Edit_event_location"
                                    required
                                    value={location}
                                    onChange={this.handleLocationChange}
                                />
                            </div>
                            <div className="Edit_event_form_other">
                                <label htmlFor="Edit_event_other" className="Edit_event_other_label">
                                    Other
                                </label>
                                <textarea
                                    id="Edit_event_other"
                                    name="Edit_event_other"
                                    rows='4'
                                    cols='40'
                                    value={other}
                                    onChange={this.handleOtherChange}
                                />
                            </div>
                            <div className="Edit_event_buttons">
                                <button type="submit" className="Edit_event_update">
                                    Update
                                </button>
                                <button type="reset" className="Edit_event_cancel" onClick={this.handleClickCancel}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        )
    }
}