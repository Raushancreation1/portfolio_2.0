import React from 'react';

const TiltCard = ({ children, className = '', ...props }) => {
    return (
        <div 
            className={`transform transition-transform duration-300 hover:scale-105 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export default TiltCard;
