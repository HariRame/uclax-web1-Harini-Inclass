import React from 'react';
import styled from 'styled-components';

import TabbedNavItem from './TabbedNavItem.jsx'
const TabbedNav = ({changeTabs,tabItems,chosenTab}) => {

    console.log('TabbedNavItem', tabItems );

    return (
        <TabbedNavStyled className='TabbedNav'>
           {
            tabItems.map((tabItem, idx) =>  {
               return <TabbedNavItem 
                        key = { idx }
                        tabItem = {tabItem}
                        changeTabs={changeTabs}
                            chosenTab ={chosenTab}
               /> 
            })
           
           }
        </TabbedNavStyled>
    );
}

export default TabbedNav;

const TabbedNavStyled = styled.div`
    
`;