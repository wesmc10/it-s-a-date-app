import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LogOut from '../LogOut/LogOut';
import Month from '../Month/Month';
import dateFns from 'date-fns';
import './Calendar.css';
import ItsADateContext from '../ItsADateContext';
import ViewEventsModal from '../ViewEventsModal/ViewEventsModal';
import config from '../config';
import TokenService from '../token-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default class Calendar extends Component {

    state = {
        currentMonth: new Date(),
        showModal: false,
        error: null
    };

    static contextType = ItsADateContext;

    componentDidMount() {
        if (!TokenService.hasAuthToken()) {
            this.props.history.push('/');
        }
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

    handleDeleteCalendar = (e) => {
        e.preventDefault();
        this.setState({
            error: null
        });
        const { currentCalendar } = this.context;

        fetch(`${config.API_ENDPOINT}/calendars/${currentCalendar.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => {
            this.context.addCurrentCalendar({});
            this.props.history.push('/create-calendar');
            
            if (!res.ok) {
                throw new Error(res.statusText);
            }
        })
        .catch(res => {
            this.setState({
                error: res.error
            });
        })
    }

    render() {
        const userId = this.context.currentUser.id;
        const { currentCalendar } = this.context;

        return (
            <div className="Calendar_view">
                <header className="Calendar_view_header">
                    <LogOut />
                </header>
                <section className="Calendar_icon_section">
                    <div className="Calendar_edit_button Tooltip_edit">
                        <Link to={'/edit-calendar'}>
                            <span className="Calendar_edit_icon">
                                <FontAwesomeIcon
                                    icon={faEdit}
                                />
                                <span className="Tooltip_edit_text">
                                    Edit Calendar
                                </span>
                            </span>
                        </Link>
                    </div>
                    <div className="Calendar_delete_button Tooltip_delete">
                        <Link to={`/${userId}/create-calendar`} onClick={this.handleDeleteCalendar}>
                            <span className="Calendar_delete_icon">
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                />
                                <span className="Tooltip_delete_text">
                                    Delete Calendar
                                </span>
                            </span>
                        </Link>
                    </div>
                </section>
                <div className="Calendar_flex_container">
                    <section className="Calendar_name_section">
                        <h1 className="Calendar_name">{currentCalendar.calendar_name}</h1>
                    </section>
                    <section className="Calendar_view_calendar">
                        <Month 
                            {...this.props}
                            prevMonth={this.handlePreviousMonth}
                            nextMonth={this.handleNextMonth}
                            currentMonth={this.state.currentMonth}
                            showModal={this.handleShowModal}
                        />
                    </section>
                </div>
                <div className="View_events_modal">
                    <ViewEventsModal
                        show={this.state.showModal}
                        hideModal={this.handleHideModal}
                    />
                </div>
            </div>
        )
    }
}