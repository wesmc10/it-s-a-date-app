import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './CreateCalendar.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class CreateCalendar extends Component {

    state = {
        name: '',
        error: null
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        if (!TokenService.hasAuthToken()) {
            this.props.history.push('/');
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { name } = this.state;
        const { id } = this.context.currentUser;

        fetch(`${config.API_ENDPOINT}/calendars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                calendar_name: name,
                user_id: id
            })
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(res => {
            this.setState({
                name: ''
            });
            this.context.addCurrentCalendar(res.calendar);
            this.context.addUserEvents([]);
            this.props.history.push('/calendar');
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
    }

    handleCalendarNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    render() {
        const { error } = this.state;

        return (
            <div className="Create_calendar">
                <header className="Create_calendar_header">
                    <LogOut />
                </header>
                <section>
                    <h1 className="Create_calendar_title">Create a Calendar</h1>
                </section>
                <section>
                    <form className="Create_calendar_form" onSubmit={this.handleSubmit}>
                        <div role="alert">
                            {error && <p className="red">{error}</p>}
                        </div>
                        <div className="Create_calendar_form_name">
                            <label htmlFor="Create_calendar_name" className="Create_calendar_label">
                                Calendar Name
                            </label>
                            <input
                                id="Create_calendar_name"
                                type="text"
                                name="Create_calendar_name"
                                required
                                onChange={this.handleCalendarNameChange}
                            />
                        </div>
                        <button type="submit" className="Create_calendar_button">
                            Create
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}