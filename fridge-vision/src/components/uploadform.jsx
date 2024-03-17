import React, { useCallback, useState } from 'react';
import axios from 'axios';

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
        if (!selectedFile) {
            console.error('No file selected for upload');
            return;
        }
    
        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = () => {
            const base64Image = reader.result.split(',')[1];
    
            axios({
                method: "POST",
                url: "https://detect.roboflow.com/aicook-lcv4d/3",
                params: {
                    api_key: "THFU6CVXMDuaozeptpA1"
                },
                data: base64Image,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error.message);
            });
        };
    };

    const ImagePreview = ({ imageUrl }) => {
        const handleImageError = () => {
            console.error('Failed to load image: ' + imageUrl);
        };

        return (
            <div {...getRootProps()} style={{ border: '1px dashed gray', padding: '20px', marginBottom: '20px' }}>
                <input {...getInputProps()} />
                <img src={imageUrl} alt="Uploaded" onError={handleImageError} style={{width: '200px', height: '200px'}} />
            </div>
        );
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            {previewUrl ? <ImagePreview imageUrl={previewUrl} /> : 
            <div {...getRootProps()} style={{ border: '1px dashed gray', padding: '20px', marginBottom: '20px' }}>
                <input {...getInputProps()} />
                {isDragActive ? <p>Drop the files here ...</p> : <p><FaSquare size={50} /> Drag 'n' drop some files here, or click to select files</p>}
            </div>}
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadForm;