import React from "react";

// Define the props interface for the Repair component
interface RepairProps {
    className?: string;
    stroke?: string;
    width?: string | number;
    height?: string | number;
}

// Functional component with TypeScript
const Repair: React.FC<RepairProps> = ({
    className,
    stroke = "currentColor",
    width = 80,
    height = 80,
}) => {
    return (
        <svg
            className={className}
            fill="black"
            stroke={stroke}
            width={width}
            height={height}
            viewBox="0 0 100 125"
            xmlns="http://www.w3.org/2000/svg"
        >
           <path d="M94.4,47.8L86,46.7l-5.1-15.5c-0.6-1.7-2.2-2.8-4-2.8l-14.5,0v-8.4c0-1.8-1.5-3.3-3.3-3.3H5.8c-1.8,0-3.3,1.5-3.3,3.3    v47.4c0,2.3,1.9,4.3,4.3,4.3h6.7c0,6.5,5.3,11.8,11.9,11.8c6.5,0,11.9-5.3,11.9-11.8h26.3c0,6.5,5.3,11.8,11.9,11.8    c6.5,0,11.9-5.3,11.9-11.8l6.7,0c2,0,3.6-1.6,3.6-3.6V51.3C97.5,49.5,96.2,48,94.4,47.8z M25.3,77.1c-3.1,0-5.6-2.5-5.6-5.6    c0-3.1,2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6C30.9,74.6,28.4,77.1,25.3,77.1z M47.5,41c-2.5,1.8-5.7,1.9-8.2,0.5l-19,15.2    c-1.3,1-3.2,0.8-4.2-0.6l-1.8-2.5c-1-1.3-0.6-3.2,0.7-4.1l20.3-13.4c-0.5-2.8,0.5-5.7,2.8-7.5c2.3-1.8,5.3-2.1,7.8-1    c0.4,0.2,0.4,0.7,0.1,1l-3.6,2.7c-1.4,1-1.7,2.9-0.7,4.3c1,1.4,2.9,1.7,4.3,0.7l3.6-2.7c0.4-0.3,0.9,0,0.9,0.4    C50.9,36.6,49.8,39.3,47.5,41z M64.2,47.2c-0.9,0-1.7-0.7-1.7-1.7v-9.3c0-0.9,0.7-1.7,1.7-1.7h10c0.7,0,1.4,0.5,1.6,1.1l3.3,9.8    c0.3,0.8-0.3,1.6-1.2,1.6H64.2z M75.4,77.1c-3.1,0-5.6-2.5-5.6-5.6c0-3.1,2.5-5.6,5.6-5.6c3.1,0,5.6,2.5,5.6,5.6    C81,74.6,78.5,77.1,75.4,77.1z"/>
        </svg>
    );
};

export default Repair;
