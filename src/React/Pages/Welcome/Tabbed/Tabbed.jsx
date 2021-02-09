import React, {useState} from 'react';
import styled from 'styled-components';

/*Script---------------------------------*/
import {tabItems} from './tabbed_data.js';



/*Components---------------------------------*/
import TabbedContent from './TabbedContent';
import TabbedNav from './TabbedNav';

const Tabbed = () => {
   
    console.log('loads Tabbed');
    const [chosenTab, chosenTabUpdate] = useState(tabItems[1]);

    const changeTabs = (tabItem) => {
        chosenTabUpdate(tabItem);
    }

    return (
        <TabbedStyled className='Tabbed'>
             <TabbedNav changeTabs={ changeTabs } tabItems = { tabItems} 
                        chosenTab = {chosenTab}/>
             <TabbedContent chosenTab = {chosenTab}/>
        </TabbedStyled>
    );
}

export default Tabbed;

const TabbedStyled = styled.div`
    
`;
