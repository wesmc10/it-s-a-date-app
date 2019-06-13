import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './EditEvent.css';
import ItsADateContext from '../ItsADateContext';

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

    componentDidMount() {
        const { eventId } = this.props.match.params;
        const currentEvent = this.context.events.find(event => event.id === eventId);

        this.setState({
            name: currentEvent.name,
            description: currentEvent.description,
            time: currentEvent.time,
            location: currentEvent.location,
            other: currentEvent.other
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, description, time, location, other } = this.state;
        const calendarId = this.context.currentCalendar.id;
        const dayId = this.context.clickedDay;
        const { eventId } = this.props.match.params;

        const updatedEvent = {
            id: eventId,
            name,
            description,
            time,
            location,
            other,
            calendarId,
            dayId
        };

        this.context.updateEvent(updatedEvent);
        this.props.history.push(`/${this.context.currentUser.id}/calendar`);
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
                        <button type="submit" className="Edit_event_submit">
                            Update
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