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
    addEvent: () => {},
    addUserEvents: () => {},
    updateEvent: () => {},
    addUser: () => {},
    addCurrentUser: () => {},
    addCurrentCalendar: () => {},
    addClickedDay: () => {}
});

export default ItsADateContext;