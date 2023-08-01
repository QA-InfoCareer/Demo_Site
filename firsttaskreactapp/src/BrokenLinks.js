import React from 'react';

const BrokenLinks = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div>
                <img
                    src="https://via.placeholder.com/300"
                    alt="Normal Image"
                    style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                />

                <img
                    src="https://via.placeholder.com/invalid-url"
                    alt="Broken Image"
                    style={{ width: '300px', height: '200px', objectFit: 'cover' }}
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/300'; // Replace broken image with a fallback image
                        e.target.alt = 'Fallback Image'; // Set alternative text for fallback image
                    }}
                />
            </div>
            
            <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                Click to visit a valid link
            </a>

            <a href="https://www.invalid-url.com" target="_blank" rel="noopener noreferrer">
                Click to visit a broken link (404 Not Found)
            </a>
        </div>
    );
};



export default BrokenLinks;