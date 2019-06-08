import React, { Component } from 'react';
import LogIn from '../LogIn/LogIn';
import './LandingPage.css';

export default class LandingPage extends Component {
    render() {
        return (
            <div className="Landing_page">
                <header className="Login_header">
                   <LogIn />
                </header>
                <main>
                    <section>
                        <h1>It's a Date</h1>
                        <h2>Leave your worries behind</h2>
                        <p>You've got enough on your mind, so relax and let 
                        It's a Date remember about all of your important events.
                        Just create a calendar, input your event information, and
                        never worry about forgetting events again.</p>
                    </section>
                    <section className="Signup_section">
                       
                    </section>
                </main>
            </div>
        )
    }
}