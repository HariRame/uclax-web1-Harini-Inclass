import React from 'react';
import styled from 'styled-components';

import FilterNavButton from './FilterNavButton.jsx'

const FilterNav = ({services, catChosen,catChosenUpdate}) => {

    console.log ('FileterNave services', services, catChosen);

    return (
        <FilterNavStyled className='FilterNav'>
            FilterNav 
            <FilterNavButton />
        </FilterNavStyled>
    );
}

export default FilterNav;

const FilterNavStyled = styled.div`
    
`;