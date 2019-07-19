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
        if (!TokenService.hasAuthToken()) {
            this.props.history.push('/');
        }
        
        // when component mounts, get current calendar information from storage
        // because App state will not yet be populated
        let currentCalendar = sessionStorage.getItem('currentCalendar');
        currentCalendar = currentCalendar && JSON.parse(currentCalendar);

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
            this.props.history.push('/calendar');
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
                        <div className="Edit_calendar_buttons">
                            <button type="submit" className="Edit_calendar_submit">
                                Submit
                            </button>
                            <button type="button" className="Edit_calendar_cancel" onClick={this.handleClickCancel}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        )
    }
}