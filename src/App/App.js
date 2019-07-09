import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ItsADateContext from '../ItsADateContext';
import CreateCalendar from '../CreateCalendar/CreateCalendar';
import CreateEvent from '../CreateEvent/CreateEvent';
import Event from '../Event/Event';
import './App.css';
import Calendar from '../Calendar/Calendar';
import EditCalendarName from '../EditCalendarName/EditCalendarName';
import EditEvent from '../EditEvent/EditEvent';

export default class App extends Component {

    state = {
        userEvents: [],
        currentUser: {},
        currentCalendar: {},
        clickedDay: ''
    };

    handleAddNewUserEvent = (newEvent) => {
        this.setState({
            userEvents: [
                ...this.state.userEvents,
                newEvent
            ]
        });
    }

    handleAddUserEvents = (events) => {
        this.setState({
            userEvents: events
        });
    }

    handleDeleteEvent = (eventId) => {
        eventId = parseInt(eventId);
        const newEvents = this.state.userEvents.filter(event =>
            event.id !== eventId  
        );
        this.setState({
            userEvents: newEvents
        });
    }

    handleUpdateEvent = (updatedEvent) => {
        const newEvents = this.state.userEvents.map(event =>
            event.id === updatedEvent.id
            ? updatedEvent
            : event    
        );
        this.setState({
            userEvents: newEvents
        });
    }

    handleAddCurrentUser = (user) => {
        this.setState({
            currentUser: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                user_name: user.user_name
            }
        });
    }

    handleAddCurrentCalendar = (calendar) => {
        this.setState({
            currentCalendar: calendar
        });
    }

    handleAddClickedDay = (dayId) => {
        this.setState({
            clickedDay: dayId
        });
    }

    render() {

        const contextValue = {
            userEvents: this.state.userEvents,
            currentUser: this.state.currentUser,
            currentCalendar: this.state.currentCalendar,
            clickedDay: this.state.clickedDay,
            addEvent: this.handleAddNewUserEvent,
            addUserEvents: this.handleAddUserEvents,
            deleteEvent: this.handleDeleteEvent,
            updateEvent: this.handleUpdateEvent,
            addCurrentUser: this.handleAddCurrentUser,
            addCurrentCalendar: this.handleAddCurrentCalendar,
            addClickedDay: this.handleAddClickedDay
        };

        return (
            <ItsADateContext.Provider value={contextValue}>
                <main role="main" className="App_main">
                    {this.state.error && <p className="error">There was an error</p>}
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={LandingPage}
                        />
                        <Route
                            path='/:userId/create-calendar'
                            component={CreateCalendar}
                        />
                        <Route
                            path='/:userId/create-event'
                            component={CreateEvent}
                        />
                        <Route
                            path='/:calendarId/calendar'
                            component={Calendar}
                        />
                        <Route
                            path='/:eventId/event'
                            component={Event}
                        />
                        <Route
                            path='/:calendarId/edit-calendar'
                            component={EditCalendarName}
                        />
                        <Route
                            path='/:eventId/edit-event'
                            component={EditEvent}
                        />
                    </Switch>
                </main>
            </ItsADateContext.Provider>
        )
    }
}