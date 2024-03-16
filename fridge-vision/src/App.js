import React, { useState } from 'react';
import UploadForm from './components/UploadForm.jsx';
import ImagePreview from './components/ImagePreview';

function App() {
    const [imageUrl, setImageUrl] = useState('');

    const handleImageUpload = (imageData) => {
        // Process image data and set the imageUrl state
        setImageUrl(imageData);
    };

    return (
        <div>
            <h1>Fridge Vision</h1>
            <UploadForm onUpload={handleImageUpload} />
            {imageUrl && <ImagePreview imageUrl={imageUrl} />}
        </div>
    );
}

export default App;
