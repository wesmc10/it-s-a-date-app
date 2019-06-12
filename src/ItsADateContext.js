import React from 'react';

const ItsADateContext = React.createContext({
    calendars: [],
    events: [],
    users: [],
    currentUser: {},
    currentCalendar: {},
    clickedDay: '',
    addCalendar: () => {},
    deleteCalendar: () => {},
    addEvent: () => {},
    addUser: () => {},
    addCurrentUser: () => {},
    addCurrentCalendar: () => {},
    addClickedDay: () => {}
});

export default ItsADateContext;