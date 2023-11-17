import React, { useState } from 'react';


export default function ColorfulDivs() {
    // An array of colors for the mouse-over state
    const colors = ['skyblue', 'salmon', 'lightgreen', 'violet'];
    // Create state variables for each inner div to track hover status
    const [hoverStatus, setHoverStatus] = useState(Array(colors.length).fill(false));

    function handleMouseOver(index) {
        setHoverStatus(hoverStatus.map((status, i) => i === index ? true : status));
    }

    function handleMouseOut(index) {
        setHoverStatus(hoverStatus.map((status, i) => i === index ? false : status));
    }

    return (
        <div style={{ height: '100vh', width: '100vw', display: 'flex', flexWrap: 'wrap' }}>
            {hoverStatus.map((hovered, index) => (
                <div 
                    key={index}
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                    style={{ 
                        width: '200px', 
                        height: '200px', 
                        backgroundColor: hovered ? colors[index] : 'lightgray',
                        transition: 'background-color 0.3s'
                    }}
                />
            ))}
        </div>
    );
}
