import React, {useState} from 'react';
import styled from 'styled-components';

import Lightbox from '../../Shared/Lightbox/Lightbox.jsx';

import {mq} from '../../../common/media_queries.js';

const StaffMember = ({ member }) => {

    const [showLightbox,showLightboxUpdate] = useState(false);

    const handleOnHide = () => {
        console.log('Closing Lightbox');
        showLightboxUpdate(false);

    }

    const handleOnShow = () => {
        console.log('HELLO');
        showLightboxUpdate(true);
    }

    return (
        <StaffMemberStyled className='StaffMember'>
            {/* <img src={ member.image  } alt={ member.name } /> */}
            {/* <h3>{ member.name }</h3> */}
            <div onClick={ handleOnShow }>
                <img src={ member.image } alt={ member.name } />
                {/* <h2>{member.name} </h2> */}
                <h3>{ member.name }</h3>
            </div>

            <Lightbox 
                show={ showLightbox }
                onHide ={ handleOnHide }
                width = '200px'
            >   
                <img src={ member.image } alt={ member.name } />
                { <h2>{member.name} </h2> }
                {/* <h3>{ item.category }</h3> */}
             </Lightbox>
        </StaffMemberStyled>
    );
}

export default StaffMember;

const StaffMemberStyled = styled.div`
    margin-bottom: 20px;
    width: 200px;

    @media ${mq.tablet} {
        width: 100px; margin: 15px;

    }

    @media ${mq.desktop} {
        width: 200px; margin: 20px;

    }
    /*flex:1; */




    img {
        max-width: 100%;
        display: block;
        padding: 5px;

    }
    h3{
        margin: 0px;
        color:white;
        background-color:maroon;
        font-size: 16px;
        padding: 5px;

    }
    
`;