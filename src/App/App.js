import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ItsADateContext from '../ItsADateContext';
import CreateCalendar from '../CreateCalendar/CreateCalendar';
import CreateEvent from '../CreateEvent/CreateEvent';
import './App.css';

export default class App extends Component {
    state = {
        calendars: [],
        events: [],
        users: [],
        error: null
    };

    handleAddCalendar = (newCalendar) => {
        this.setState({
            calendars: [
                ...this.state.calendars,
                newCalendar
            ]
        });   
    }

    handleAddEvent = (newEvent) => {
        this.setState({
            events: [
                ...this.state.events,
                newEvent
            ]
        });
    }

    handleAddUser = (newUser) => {
        this.setState({
            users: [
                ...this.state.users,
                newUser
            ]
        });
    }

    render() {

        const contextValue = {
            calendars: this.state.calendars,
            events: this.state.events,
            users: this.state.users,
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
                            path='/create-calendar'
                            component={CreateCalendar}
                        />
                        <Route
                            path='/create-event'
                            component={CreateEvent}
                        />
                    </Switch>
                </main>
            </ItsADateContext.Provider>
        )
    }
}