import React from 'react';
import ReactDOM from 'react-dom';
import DaysOfTheWeek from './DaysOfTheWeek';

describe('DaysOfTheWeek component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<DaysOfTheWeek />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});