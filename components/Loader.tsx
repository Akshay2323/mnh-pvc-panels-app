import Image from 'next/image';
import React from 'react';

interface LoaderProps {
    size?: 'small' | 'medium' | 'large';
}

const Loader: React.FC<LoaderProps> = ({ size = 'medium' }) => {
    return (
        <div className="loader-container">
            <div className={`logo-loader ${size}`}>
                <Image src="/assets/app-logo.webp" alt="MNH PVC Panels Logo" layout="fill" objectFit="contain" className="logo-image" />
                <div className="pulse-effect"></div>
            </div>
            <p className="loader-text">Loading...</p>
        </div>
    );
};

export default Loader;
