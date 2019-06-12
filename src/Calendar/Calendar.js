import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import Month from '../Month/Month';
import dateFns from 'date-fns';
import './Calendar.css';
import ItsADateContext from '../ItsADateContext';
import ViewEventsModal from '../ViewEventsModal/ViewEventsModal';

export default class Calendar extends Component {

    state = {
        currentMonth: new Date(),
        showModal: false
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        const { userId } = this.props.match.params;
        const currentCalendar = this.context.calendars.find(calendar => calendar.userId === userId);

        this.context.addCurrentCalendar(currentCalendar);
    }

    handlePreviousMonth = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    handleNextMonth = () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    handleShowModal = () => {
        this.setState({
            showModal: true
        });
    }

    handleHideModal = () => {
        this.setState({
            showModal: false
        });
    }

    handleDeleteCalendar = () => {   
        const { userId } = this.props.match.params;     
        const currentCalendar = this.context.calendars.find(calendar => calendar.userId === userId);
        this.context.deleteCalendar(currentCalendar.id);
    }

    render() {
        const { userId } = this.props.match.params;

        return (
            <div className="Calendar_view">
                <header className="Calendar_view_header">
                    <LogOut />
                </header>
                <section className="Calendar_view_calendar">
                    <Month 
                        {...this.props}
                        prevMonth={this.handlePreviousMonth}
                        nextMonth={this.handleNextMonth}
                        currentMonth={this.state.currentMonth}
                        showModal={this.handleShowModal}
                    />
                </section>
                <div className="View_events_modal">
                    <ViewEventsModal
                        show={this.state.showModal}
                        hideModal={this.handleHideModal}
                    />
                </div>
                <section className="Calendar_delete_section">
                    <Link to={`/${userId}/create-calendar`} onClick={this.handleDeleteCalendar}>
                        Delete Calendar
                    </Link>
                </section>
            </div>
        )
    }
}