// searchbar.jsx
// Built with Gemini 2.5
import React, { useState } from 'react';

// Accept the state setter function as a prop
export default function SearchBar({ setOpenComponents }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchSubmit = (event) => {
        // 1. Prevents the default form behavior, which is to refresh the page.
        event.preventDefault(); 
        
        alert(`You searched: "${searchTerm}". The dogsalt search index has not been set up yet. Please try again later!`); // Your search logic would go here

        // 2. Closes the search bar by updating the parent component's state.
        setOpenComponents(prevState => ({
            ...prevState,
            isSearchOpen: false
        }));

        // Optional: clear the input field after submitting
        setSearchTerm('');
    };

    return (
        <nav className="searchbar_container">
            {/* Attach the handler to the form's onSubmit event */}
            <form onSubmit={handleSearchSubmit}>
                <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/* The button's type="submit" will trigger the form's onSubmit handler */}
                <button type="submit">search?</button>
            </form>
        </nav>
    );
};