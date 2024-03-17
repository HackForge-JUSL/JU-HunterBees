import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FaSquare } from 'react-icons/fa';

function UploadForm() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
        setPreviewUrl(URL.createObjectURL(acceptedFiles[0]));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleUpload = () => {
        // Handle image upload to the backend
        // Pass selectedFile to backend API
        // Display loading indicator while waiting for response
    };

    const ImagePreview = ({ imageUrl }) => {
        const handleImageError = () => {
            console.error('Failed to load image: ' + imageUrl);
        };

        return (
            <div>
                <img src={imageUrl} alt="Uploaded" onError={handleImageError} style={{width: '200px', height: '200px'}} />
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div {...getRootProps()} style={{ border: '1px dashed gray', padding: '20px', marginBottom: '20px' }}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here ...</p> : <p><FaSquare size={50} /> Drag 'n' drop some files here, or click to select files</p>}
            </div>
            <button onClick={handleUpload}>Upload</button>
            {previewUrl && <ImagePreview imageUrl={previewUrl} />}
        </div>
    );
}

export default UploadForm;