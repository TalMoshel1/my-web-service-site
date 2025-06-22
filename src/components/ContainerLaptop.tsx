'use client'; 

import React, { useEffect, useState } from "react";
// Assuming these are valid components
import SearchEngineImage from "./SearchEngineImage";
import SearchEngineSvg from "./SearchEngineSvg";
import '../components-css/ContainerLaptop.css'; // Make sure this path is correct

interface ContainerLaptopProps {
    isAnimated: boolean;
}

const ContainerLaptop: React.FC<ContainerLaptopProps> = ({ isAnimated = true }) => {
    const [containerProperties, setContainerProperties] = useState({
        left: '-12%',
        transformRotate: '0deg' // Initialize with 0deg for smooth transition
    });

    useEffect(() => {
        // if (isAnimated) {
            setContainerProperties({
                left: '85%',
                transformRotate: '360deg'
            });
        // }
    }, []);

    return (
        <div
            className='laptop' // This class now links to your CSS file for static styles and transitions
            style={{
                // These properties remain here as they are dynamic (controlled by state)
                left: containerProperties.left,
                transform: `translate(-50%, -50%) rotate(${containerProperties.transformRotate})`,
            }}
        >
            <SearchEngineSvg />
            {/* <SearchEngineImage /> */}
        </div>
    );
};

export default ContainerLaptop;