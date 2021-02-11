import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

/*----------------Scripts*/
import {mq} from '../common/media_queries.js';
import useMediaQuery from '../common/useMediaQuery.js'


//import Login from './Pages/Login.jsx'
import Main from './Main.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import NavLarge from './Nav/NavLarge.jsx'
import NavMobile from './Nav/NavMobile.jsx'
const Container = () => {

    const { isSmall} = useMediaQuery();
    console.log("isSmall is", isSmall) 
    return(
        
        <BrowserRouter> 
        
         
        <ContainerStyled className ='Container'>
            
            <Header/>
             {
                
                isSmall
               ? <NavMobile/>
               : <NavLarge/>
             }
             
            <Main/>
            
            <Footer/>
        </ContainerStyled>
        </BrowserRouter>
        
    );
}

export default Container;
const ContainerStyled = styled.div`
  background-color: pink;
  @media ${mq.tablet}{
     background-color: yellow;
  }

  @media ${mq.desktop}{
      background-color:maroon;
  }

  @media ${mq.ultrawide} {
      background-color: purple;
  }
`