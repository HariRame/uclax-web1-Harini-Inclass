import React from 'react';
import styled from 'styled-components';

/* Componenets---------*/
import Nav from './Nav.jsx';

const NavLarge = () => {

    return (
        <NavLargeStyled className='NavLarge'>
            NavLarge
            <Nav /> 
        </NavLargeStyled>
    );
}

export default NavLarge;

const NavLargeStyled = styled.div`

display: flex;
justify-content: center;
background-color: #003232;
padding: 20px;

.Nav {
    display: flex;
    width: 500px;
    //outline: solid 2px white;
}
a {
    flex: 1;
    text-align: center;
   background: #008080;
   color: white;
   text-decoration: none;

   border-radius: 5px;

   padding: 10px;
   margin: 10px;

   &.active {
       background-color: orange;
       color: #003232;
   }
}`    
;