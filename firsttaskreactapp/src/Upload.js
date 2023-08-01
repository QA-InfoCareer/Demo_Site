import React from 'react';

const Upload = () => {
    const handleFileUpload = (event) => {
        // Handle file upload logic here
        const file = event.target.files[0];
        console.log('File uploaded:', file);
    };

    const handleFileDownload = () => {
        // Handle file download logic here
        // For example, you can create a Blob and use it to create a URL for download
        const fileData = 'This is the content of the downloaded file.';
        const blob = new Blob([fileData], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'file.txt';
        a.click();
        URL.revokeObjectURL(url);
    };



    return (
        <div>
            <h2>Upload File</h2>
            <input type="file" onChange={handleFileUpload} />



            <h2>Download File</h2>
            <button onClick={handleFileDownload}>Download</button>
        </div>
    );
};



export default Upload;