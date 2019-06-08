import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './CreateCalendar.css';
import ItsADateContext from '../ItsADateContext';

export default class CreateCalendar extends Component {

    state = {
        name: '',
        error: null
    };

    static contextType = ItsADateContext;

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;

        const newCalendar = {
            name
        };

        this.context.addCalendar(newCalendar);
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
                        <button type="submit" className="Create_calendar_submit">
                            Create
                        </button>
                        <button type="reset">
                            Cancel
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}