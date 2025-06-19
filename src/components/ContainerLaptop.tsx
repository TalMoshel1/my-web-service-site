import React from "react";
import SearchEngineImage from "./SearchEngineImage";
import SearchEngineSvg from "./SearchEngineSvg";

const ContainerLaptop: React.FC = () => {
    return (
        <div className='laptop' style={{position:'absolute', top: '50%', left: '85%', transform: 'translate(-50%,-50%)', height: '10rem', width: 'auto'}}>
            <SearchEngineSvg />
            {/* <SearchEngineImage /> */}
        </div>
    );
};

export default ContainerLaptop;