import React, { useState } from 'react'

const Tooltip = ({ position }) => {

    const [flag, setFlag] = useState(false);
    function handleMouseIn() {
        setFlag(true);
    }
    function handleMouseOut() {
        setFlag(false);
    }
    const visibility = { display: flag ? "table" : "none" }
    return (
        <div>
            <button className='tooltipContainer' onMouseOver={handleMouseIn} onMouseOut={handleMouseOut}>
                Hover Over me
            </button>
            <div className={`${position}`} id="tooltipText" style={visibility}>
                Know you are clicking on {position} tip
            </div>
        </div>
    )
}

export default Tooltip
