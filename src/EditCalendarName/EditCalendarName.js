import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './EditCalendarName.css';
import ItsADateContext from '../ItsADateContext';
import config from '../config';
import TokenService from '../token-service';

export default class EditCalendarName extends Component {

    state = {
        name: '',
        error: null
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        const { currentCalendar } = this.context;

        this.setState({
            name: currentCalendar ? currentCalendar.calendar_name : ''
        });
    }

    handleCalendarNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { name } = this.state;
        const { currentCalendar } = this.context;

        fetch(`${config.API_ENDPOINT}/calendars/${currentCalendar.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                calendar_name: name
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
            this.props.history.push(`/${res.calendar.id}/calendar`);
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
    }

    handleClickCancel = () => {
        this.props.history.goBack();
    }

    render() {
        const { name, error } = this.state;

        return (
            <div className="Edit_calendar">
                <header className="Edit_calendar_header">
                    <LogOut />
                </header>
                <section>
                    <h1 className="Edit_calendar_title">Edit Calendar</h1>
                </section>
                <section>
                    <form className="Edit_calendar_form" onSubmit={this.handleSubmit}>
                        <div role="alert">
                            {error && <p className="red">{error}</p>}
                        </div>
                        <div className="Edit_calendar_form_name">
                            <label htmlFor="Edit_calendar_name" className="Edit_calendar_label">
                                Calendar Name
                            </label>
                            <input
                                id="Edit_calendar_name"
                                type="text"
                                name="Edit_calendar_name"
                                required
                                value={name}
                                onChange={this.handleCalendarNameChange}
                            />
                        </div>
                        <button type="submit" className="Edit_calendar_submit_button">
                            Submit
                        </button>
                        <button type="button" onClick={this.handleClickCancel}>
                            Cancel
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}