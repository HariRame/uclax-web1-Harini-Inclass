import React from 'react';
import styled from 'styled-components';

import FilterNavButton from './FilterNavButton.jsx'

const FilterNav = () => {

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