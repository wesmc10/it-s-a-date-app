import React from 'react';

const ItsADateContext = React.createContext({
    userEvents: [],
    currentUser: {},
    currentCalendar: {},
    clickedDay: '',
    addEvent: () => {},
    addUserEvents: () => {},
    deleteEvent: () => {},
    updateEvent: () => {},
    addCurrentUser: () => {},
    addCurrentCalendar: () => {},
    addClickedDay: () => {}
});

export default ItsADateContext;