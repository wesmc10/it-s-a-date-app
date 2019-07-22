import React from 'react';
import './NotFound.css';
import LogOut from '../LogOut/LogOut';

export default function NotFound() {

    return (
        <div className="Not_found_page">
            <header className="Not_found_header">
                <LogOut />
            </header>
            <section className="Not_found_content">
                <h2 className="Not_found_404">404 - Page not found</h2>
                <p className="Not_found_paragraph">Try going back to the previous page</p>
            </section>
        </div>
    )
}