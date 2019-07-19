import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import convertTime from 'convert-time';
import './ViewEventsModal.css';
import ItsADateContext from '../ItsADateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
                        <span className="close_window_icon">
                            <FontAwesomeIcon icon={faWindowClose} />
                        </span>
                    </button>
                    {userEvents.filter(event => event.day_id === clickedDay).sort((a, b) => (a.event_time > b.event_time) ? 1 : -1).map(event =>
                        <div className="Events_for_this_day"  key={event.id}>
                            <Link to={'/event'} className="Events_for_this_day_link">
                                {`${event.event_name} at ${convertTime(event.event_time, 'hh:MM A')}`}
                            </Link>
                        </div>
                    )}
                    <div className="Create_event_link">
                        <Link to={'/create-event'}>
                            <span className="Create_event_icon">
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                />
                            </span>
                        </Link>
                    </div>
                </section>
            </div>
        ) 
    }
}