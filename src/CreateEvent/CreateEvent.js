import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './CreateEvent.css';
import ItsADateContext from '../ItsADateContext';
import uuid from 'uuid';

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
        
        const { name, description, time, location, other } = this.state;
        const calendarId = this.context.currentCalendar.id;

        const id = uuid();
        const newEvent = {
            id,
            name,
            description,
            time,
            location,
            calendarId,
            other
        };

        this.context.addEvent(newEvent);
        this.props.history.push(`/${this.props.match.params.userId}/calendar`);
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
    }

    render() {
        const { error } = this.state;

        return (
            <div className="Create_event">
                <header className="Create_event_header">
                    <LogOut />
                </header>
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
                        <button type="submit" className="Create_event_submit">
                            Create
                        </button>
                        <button type="reset" onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}