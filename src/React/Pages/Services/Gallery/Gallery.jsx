import React from 'react';
import styled from 'styled-components';

import GalleryItem from './GalleryItem'

const Gallery = () => {

    return (
        <GalleryStyled className='Gallery'>
            Gallery 
            <GalleryItem />
        </GalleryStyled>
    );
}

export default Gallery;

const GalleryStyled = styled.div`
    
`;