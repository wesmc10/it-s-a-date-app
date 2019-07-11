import React from 'react';
import ReactDOM from 'react-dom';
import LogIn from './LogIn';

describe('LogIn component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LogIn />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});