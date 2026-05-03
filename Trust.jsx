import React from 'react';

// Update the import paths for images from '../assets/' to '../Assets/'
import image1 from '../Assets/image1.png';
import image2 from '../Assets/image2.png';

const Trust = () => {
    return (
        <div>
            <img src={image1} alt="Image 1" />
            <img src={image2} alt="Image 2" />
        </div>
    );
};

export default Trust;