import React from 'react';
import styled from 'styled-components';

import Light from './Light'
const Lightbox = () => {

    return (
        <LightboxStyled className='Lightbox'>
               <Light />
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`
    
`;