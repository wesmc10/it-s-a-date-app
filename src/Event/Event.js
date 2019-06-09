import React from 'react';
import LogOut from '../LogOut/LogOut';
import './Event.css';

export default function Event() {
    return (
        <div className="Event_view">
            <header className="Event_view_header">
                <LogOut />
            </header>
            <section className="Event_view_name">
                <h1 className="Event_name">[Event Name]</h1>
            </section>
            <section className="Event_view_description">
                <h2 className="section_tag">Description</h2>
                <p className="section_description">Praesent sagittis a mi sit amet dictum. Donec orci nibh, dignissim in leo et,
                congue semper mauris. Donec elit lacus, dictum et placerat eget, rhoncus sodales 
                erat. Curabitur sit amet placerat neque, a tempus mi. Suspendisse a tempus dolor.
                Nullam porttitor nisi sed justo dictum consequat. Etiam sed congue felis.</p>
            </section>
            <section className="Event_view_time">
                <h2 className="section_tag">Time</h2>
                <p className="section_time">4:30 PM</p>
            </section>
            <section className="Event_view_location">
                <h2 className="section_tag">Location</h2>
                <p className="section_description">Curabitur sit amet placerat neque a tempus mi</p>
            </section>
            <section className="Event_view_other">
                <h2 className="section_tag">Other</h2>
                <p className="section_description">Donec elit lacus, dictum et placerat eget, rhoncus sodales erat. Curabitur sit 
                amet placerat neque, a tempus mi. Suspendisse a tempus dolor. Nullam porttitor nisi 
                sed justo dictum consequat.</p>
            </section>
            <section className="Event_edit_button">
                <button type="button">
                    Edit Event
                </button>
            </section>
        </div>
    )
}