import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import './App.css';

export default class App extends Component {
    state = {
        error: null
    };

    render() {

        return (
            <main className="App_main">
                {this.state.error && <p className="error">There was an error</p>}
                <Switch>
                    <Route
                        exact
                        path={'/'}
                        component={LandingPage}
                    />
                </Switch>
            </main>
        );
    }
}