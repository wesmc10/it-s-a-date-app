import React from 'react';
import ReactDOM from 'react-dom';
import MonthHeader from './MonthHeader';

describe('MonthHeader component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MonthHeader />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});