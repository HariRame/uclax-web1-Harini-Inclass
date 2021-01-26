import React from 'react';
import styled from 'styled-components';

const Slideshow = () => {

    return (
        <SlideshowStyled className='Slideshow'>
            <img src ='/assets/img/Slideshow/Slide-1.jpg' alt = 'Spa slide 1' />
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    
`;