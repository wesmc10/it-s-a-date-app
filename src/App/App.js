import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import ItsADateContext from '../ItsADateContext';
import './App.css';

export default class App extends Component {
    state = {
        calendars: [],
        events: [],
        users: [],
        error: null
    };

    handleAddCalendar = (calendar) => {
        console.log('adding calendar');
    }

    handleAddEvent = (event) => {
        console.log('adding event');
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
                            path={'/'}
                            component={LandingPage}
                        />
                    </Switch>
                </main>
            </ItsADateContext.Provider>
        )
    }
}