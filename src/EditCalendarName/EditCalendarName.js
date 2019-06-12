import React, { Component } from 'react';
import LogOut from '../LogOut/LogOut';
import './EditCalendarName.css';
import ItsADateContext from '../ItsADateContext';

export default class EditCalendarName extends Component {

    state = {
        name: '',
        error: null
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        const { currentCalendar } = this.context;

        this.setState({
            name: currentCalendar.name
        });
    }

    handleCalendarNameChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name } = this.state;
        const { currentCalendar } = this.context;

        const updatedCalendar = {
            id: currentCalendar.id,
            name,
            userId: currentCalendar.userId
        };

        this.context.updateCalendar(updatedCalendar);
        this.props.history.push(`/${currentCalendar.userId}/calendar`);
    }

    render() {
        const { name, error } = this.state;

        return (
            <div className="Create_calendar">
                <header className="Create_calendar_header">
                    <LogOut />
                </header>
                <section>
                    <h1 className="Create_calendar_title">Edit Calendar</h1>
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
                                value={name}
                                onChange={this.handleCalendarNameChange}
                            />
                        </div>
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </section>
            </div>
        )
    }
}