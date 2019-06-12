import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ItsADateContext from '../ItsADateContext';
import CreateCalendar from '../CreateCalendar/CreateCalendar';
import CreateEvent from '../CreateEvent/CreateEvent';
import Event from '../Event/Event';
import STORE from '../dummy-store';
import './App.css';
import Calendar from '../Calendar/Calendar';

export default class App extends Component {

    static defaultProps = {
        store: {
            calendars: [],
            events: [],
            users: []
        }
    }

    state = {
        store: STORE,
        currentUser: {},
        currentCalendar: {},
        clickedDay: ''
    };

    handleAddCalendar = (newCalendar) => {
        this.setState({
            store: {
                users: this.state.store.users,
                events: this.state.store.events,
                calendars: [
                    ...this.state.store.calendars,
                    newCalendar
                ]
            }
        });   
    }

    handleDeleteCalendar = (calendarId) => {
        console.log(`deleting calendar with id ${calendarId}`);
        const newCalendars = this.state.store.calendars.filter(calendar =>
            calendar.id !== calendarId
        );
        this.setState({
            store: {
                users: this.state.store.users,
                events: this.state.store.events,
                calendars: newCalendars
            }
        });
    }

    handleAddEvent = (newEvent) => {
        this.setState({
            store: {
                calendars: this.state.store.calendars,
                users: this.state.store.users,
                events: [
                    ...this.state.store.events,
                    newEvent
                ]
            }
        });
    }

    handleAddUser = (newUser) => {
        this.setState({
            store: {
                calendars: this.state.store.calendars,
                events: this.state.store.events,
                users: [
                    ...this.state.store.users,
                    newUser
                ]
            }
        });
    }

    handleAddCurrentUser = (user) => {
        this.setState({
            currentUser: user
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
            calendars: this.state.store.calendars,
            events: this.state.store.events,
            users: this.state.store.users,
            currentUser: this.state.currentUser,
            currentCalendar: this.state.currentCalendar,
            clickedDay: this.state.clickedDay,
            addCalendar: this.handleAddCalendar,
            deleteCalendar: this.handleDeleteCalendar,
            addEvent: this.handleAddEvent,
            addUser: this.handleAddUser,
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
                            path='/:userId/calendar'
                            component={Calendar}
                        />
                        <Route
                            path='/:eventId/event'
                            component={Event}
                        />
                    </Switch>
                </main>
            </ItsADateContext.Provider>
        )
    }
}