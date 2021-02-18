import React from 'react';
import styled from 'styled-components';

import Lightbox from '../../Shared/Lightbox/Lightbox.jsx';

import {mq} from '../../../common/media_queries.js';

const StaffMember = ({ member }) => {

    return (
        <StaffMemberStyled className='StaffMember'>
            <img src={ member.image } />
            <h3>{ member.name }</h3>

            <Lightbox/>
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