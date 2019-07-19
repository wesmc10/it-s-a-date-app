import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './CreateEvent.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class CreateEvent extends Component {

    state = {
        name: '',
        description: '',
        time: '',
        location: '',
        other:'',
        error: null
    };

    static contextType = ItsADateContext;

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { name, description, time, location, other } = this.state;
        const calendarId = this.context.currentCalendar.id;
        const dayId = this.context.clickedDay;

        fetch(`${config.API_ENDPOINT}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                event_name: name,
                description,
                event_time: time,
                location,
                other,
                day_id: dayId,
                calendar_id: calendarId  
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
            this.context.addEvent(res.event);
            this.props.history.push(`/${calendarId}/calendar`);
            this.context.addClickedDay('');
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
        if (!TokenService.hasAuthToken()) {
            this.props.history.push('/');
        }

        const { error } = this.state;

        return (
            <div className="Create_event">
                <header className="Create_event_header">
                    <LogOut />
                </header>
                <div className="Create_event_flex_container">
                    <section>
                        <h1 className="Create_event_title">Create an Event</h1>
                    </section>
                    <section>
                        <form className="Create_event_form" onSubmit={this.handleSubmit}>
                            <div role="alert">
                                {error && <p className="red">{error}</p>}
                            </div>
                            <div className="Create_event_form_name">
                                <label htmlFor="Create_event_name" className="Create_event_name_label">
                                    Name
                                </label>
                                <input
                                    id="Create_event_name"
                                    type="text"
                                    name="Create_event_name"
                                    required
                                    onChange={this.handleNameChange}
                                />
                            </div>
                            <div className="Create_event_form_description">
                                <label htmlFor="Create_event_description" className="Create_event_description_label">
                                    Description
                                </label>
                                <textarea
                                    id="Create_event_description"
                                    name="Create_event_description"
                                    rows='6'
                                    cols='40'
                                    required
                                    onChange={this.handleDescriptionChange}
                                />
                            </div>
                            <div className="Create_event_form_time">
                                <label htmlFor="Create_event_time" className="Create_event_time_label">
                                    Time
                                </label>
                                <input
                                    id="Create_event_time"
                                    type="time"
                                    name="Create_event_time"
                                    required
                                    onChange={this.handleTimeChange}
                                />
                            </div>
                            <div className="Create_event_form_location">
                                <label htmlFor="Create_event_location" className="Create_event_location_label">
                                    Location
                                </label>
                                <input
                                    id="Create_event_location"
                                    type="text"
                                    name="Create_event_location"
                                    required
                                    onChange={this.handleLocationChange}
                                />
                            </div>
                            <div className="Create_event_form_other">
                                <label htmlFor="Create_event_other" className="Create_event_other_label">
                                    Other
                                </label>
                                <textarea
                                    id="Create_event_other"
                                    name="Create_event_other"
                                    rows='4'
                                    cols='40'
                                    onChange={this.handleOtherChange}
                                />
                            </div>
                            <div className="Create_event_buttons">
                                <button type="submit" className="Create_event_submit">
                                    Create
                                </button>
                                <button type="reset" className="Create_event_cancel" onClick={this.handleClickCancel}>
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