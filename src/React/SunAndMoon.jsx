import React, {useState} from 'react';


const SunAndMoon = () =>  {

    const [imageSrc,imageSrcUpdate] = useState('/assets/img/moon.png');

    const imageOver = () => {
        imageSrcUpdate('/assets/img/sun.png');
    }

    const imageOut = () => {
        imageSrcUpdate('/assets/img/moon.png')
    }
    return (
        <div>The Sun and the Moon
            <img 
             src = {imageSrc} 
             alt = 'The Suna nd the Moon'
             onMouseOver={imageOver}
             onMouseOut={imageOut}
             
             />
        </div>
    )
}

export default SunAndMoon;