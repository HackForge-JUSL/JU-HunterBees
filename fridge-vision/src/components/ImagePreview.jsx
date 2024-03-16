import React from 'react';

function ImagePreview({ imageUrl }) {
    return (
        <div>
            <img src={imageUrl} alt="Uploaded" />
        </div>
    );
}

export default ImagePreview;
