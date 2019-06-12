import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import dateFns from 'date-fns';
import './ViewEventsModal.css';
import ItsADateContext from '../ItsADateContext';

export default class ViewEventsModal extends Component {
    static contextType = ItsADateContext;

    render() {
        const { show, hideModal } = this.props;
        const showOrHideModalClassName = show ? "Modal display" : "Modal hide";
        const { events } = this.context;
        const { clickedDay } = this.context;

        return (
            <div className={showOrHideModalClassName}>
                <section className="Modal_section">
                    <button type="button" className="hide_modal_button" onClick={hideModal}>
                        X
                    </button>
                    {events.filter(event => event.dayId === clickedDay).map(event =>
                        <div className="Events_for_this_day"  key={event.id}>
                            <Link to={`/${event.id}/event`}>
                                {`Event: ${event.name}`}
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