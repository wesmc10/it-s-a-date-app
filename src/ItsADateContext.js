import React from 'react';

const ItsADateContext = React.createContext({
    calendars: [],
    userEvents: [],
    users: [],
    currentUser: {},
    currentCalendar: {},
    clickedDay: '',
    addCalendar: () => {},
    deleteCalendar: () => {},
    updateCalendar: () => {},
    addEvent: () => {},
    addUserEvents: () => {},
    deleteEvent: () => {},
    updateEvent: () => {},
    addUser: () => {},
    addCurrentUser: () => {},
    addCurrentCalendar: () => {},
    addClickedDay: () => {}
});

export default ItsADateContext;