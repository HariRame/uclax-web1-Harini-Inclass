import React from 'react';
import styled from 'styled-components';

import StaffMember from './StaffMember.jsx';

/*-----Scripts------------------------>*/
import {staffData} from './staffData.js';

const Staff = () => {

    return (
        <StaffStyled className='Staff'>
            <h2>Staff</h2>
            <div className =  "members">
            {
                 staffData.map( (member, idx) => {
                     return <StaffMember key={idx} member={member} />
                 })
             }
            </div>
             
        </StaffStyled>
    );
}

export default Staff;

const StaffStyled = styled.div`
    background-color: teal;
    padding: 25px;
    margin: 25px 0 px;

    .members {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        justify-content: flex-start;
        justify-content: flex-end;
        justify-content: space-between;

    }

    
`;