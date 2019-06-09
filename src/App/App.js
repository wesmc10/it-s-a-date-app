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
        store: STORE
    };

    handleAddCalendar = (newCalendar) => {
        this.setState({
            store: {
                calendars: [
                    ...this.state.store.calendars,
                    newCalendar
                ]
            }
        });   
    }

    handleAddEvent = (newEvent) => {
        this.setState({
            store: {
                events: [
                    ...this.state.store.events,
                    newEvent
                ]
            }
        });
    }

    handleAddUser = (newUser) => {
        console.log(`Adding ${newUser.firstName}`)
        this.setState({
            store: {
                users: [
                    ...this.state.store.users,
                    newUser
                ]
            }
        });
    }

    render() {

        const contextValue = {
            calendars: this.state.store.calendars,
            events: this.state.store.events,
            users: this.state.store.users,
            addCalendar: this.handleAddCalendar,
            addEvent: this.handleAddEvent,
            addUser: this.handleAddUser
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
                            path='/:userId/event'
                            component={Event}
                        />
                    </Switch>
                </main>
            </ItsADateContext.Provider>
        )
    }
}