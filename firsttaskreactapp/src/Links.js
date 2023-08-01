import React, { useState } from 'react';

const Links = () => {
    const [clickedStatus, setClickedStatus] = useState('');

    // Function to handle API call when a link is clicked
    const handleApiCall = (event, status) => {
        event.preventDefault();
        // Perform your API call here using the 'status' variable
        console.log('API call triggered with status:', status);
        setClickedStatus(status);
    };



    return (
        <div>
            {/* Links that will open in a new tab */}
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                Home
            </a>
            <br />
            <a href="https://example.com/HomeOoK34" target="_blank" rel="noopener noreferrer">
                HomeOoK34
            </a>
            <br />



            {/* Buttons that will trigger API calls */}
            <a href="#" onClick={(e) => handleApiCall(e, 'Created')}>
                Created
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'No Content')}>
                No Content
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'Moved')}>
                Moved
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'Bad Request')}>
                Bad Request
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'Unauthorized')}>
                Unauthorized
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'Forbidden')}>
                Forbidden
            </a>
            <br />
            <a href="#" onClick={(e) => handleApiCall(e, 'Not Found')}>
                Not Found
            </a>
            <br />



            {/* Display the clicked status below the links */}
            {clickedStatus && <div>Clicked Status: {clickedStatus}</div>}
        </div>
    );
};



export default Links;