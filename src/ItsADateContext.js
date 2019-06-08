import React from 'react';

const ItsADateContext = React.createContext({
    calendars: [],
    events: [],
    users: [],
    addCalendar: () => {},
    addEvent: () => {},
    addUser: () => {}
});

export default ItsADateContext;