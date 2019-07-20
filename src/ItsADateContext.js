import React from 'react';

const ItsADateContext = React.createContext({
    userEvents: [],
    currentUser: {},
    currentCalendar: {},
    currentEvent: {},
    clickedDay: '',
    addEvent: () => {},
    addCurrentEvent: () => {},
    addUserEvents: () => {},
    deleteEvent: () => {},
    updateEvent: () => {},
    addCurrentUser: () => {},
    addCurrentCalendar: () => {},
    addClickedDay: () => {}
});

export default ItsADateContext;