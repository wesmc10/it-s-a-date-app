import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import convertTime from 'convert-time';
import './ViewEventsModal.css';
import ItsADateContext from '../ItsADateContext';

export default class ViewEventsModal extends Component {
    static contextType = ItsADateContext;

    render() {
        const { show, hideModal } = this.props;
        const showOrHideModalClassName = show ? "Modal display" : "Modal hide";
        const { userEvents } = this.context;
        const { clickedDay } = this.context;

        return (
            <div className={showOrHideModalClassName}>
                <section className="Modal_section">
                    <button type="button" className="hide_modal_button" onClick={hideModal}>
                        X
                    </button>
                    {userEvents.filter(event => event.day_id === clickedDay).map(event =>
                        <div className="Events_for_this_day"  key={event.id}>
                            <Link to={`/${event.id}/event`}>
                                {`${event.event_name} at ${convertTime(event.event_time, 'hh:MM A')}`}
                            </Link>
                        </div>
                    )}
                    <div className="Create_event_link">
                        <Link to={`/${this.context.currentUser.id}/create-event`}>
                            Create a New Event
                        </Link>
                    </div>
                </section>
            </div>
        ) 
    }
}