import React from 'react';

const ItsADateContext = React.createContext({
    calendars: [],
    events: [],
    users: [],
    currentUser: '',
    addCalendar: () => {},
    addEvent: () => {},
    addUser: () => {},
    addCurrentUser: () => {},
    addCalendarIdToUser: () => {}
});

export default ItsADateContext;