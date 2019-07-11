import React from 'react';
import ReactDOM from 'react-dom';
import MonthDateSection from './MonthDateSection';

describe('MonthDateSection component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MonthDateSection />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});