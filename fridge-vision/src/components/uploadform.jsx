import React, { useState } from 'react';
import ImagePreview from './ImagePreview';

function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setPreviewUrl(URL.createObjectURL(event.target.files[0]));
    };

    const handleUpload = () => {
        // Handle image upload to the backend
        // Pass selectedFile to backend API
        // Display loading indicator while waiting for response
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {previewUrl && <ImagePreview imageUrl={previewUrl} />}
        </div>
    );
}

export default UploadForm;