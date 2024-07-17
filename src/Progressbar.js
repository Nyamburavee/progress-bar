import React from "react"

const Progressbar = ({width:inputWidth}) => {
    if(inputWidth < 0 || inputWidth > 100){
        alert("please enter a value between 0 and 100 ");
        return null;
    }
    return (
    <div className="outer-container">
            <div className="inner-container" style={{width: `${inputWidth}%`}}>
            {inputWidth}%
            </div>
        
    </div>
    );
};

export default Progressbar;