import { useState } from "react";



export default function ImgSize() {
    const [imgSize, setImgSize] = useState(200);
    const [mouseOver, setMouseOver] = useState(false)

    function handleClick() {
        console.log('im clicked');
    if (imgSize === 200) {
        setImgSize(400);
        }   else {
            setImgSize(200);
        }
    
    }
    function handleMouseOver() {
        setMouseOver(true);
    }

    function handleMouseOut() {
        setMouseOver(false);
    }
    
      return (
        <div>
            <img onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}  src='../logo512.png' width={`${imgSize}px`} style={{filter: mouseOver ? 'grayscale(100%) ': 'none' }}/>
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
      Click Me
    </button>
        </div>
      )
    }
