import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
{/* <FontAwesomeIcon icon={ faTimes } /> */}

const Light = ({onHide,width,children}) => {

  const handleStopProp = (event) => {

    event.stopPropagation();
  }

    return (
        <LightStyled 
        className='Light'
        onClick = {handleStopProp}
        width = {width}>

          <button className='close' onClick = {onHide}>
            <FontAwesomeIcon icon={ faTimes } />
          </button>
          
            {children}
        </LightStyled>
    );
}

export default Light;

const LightStyled = styled.div`
  background-color: white;
  padding: 20px;
  position: absolute;
  
  width: ${({width}) => width};

  left: 50%;
  top: 50%;
  
  transform: translate(-50%, -50%);

  button.close {
    background-color: white;
    border-radius: 50%;
    width: 30px;
    height:30px;

    box-shadow:3px 0px 10px rgba(0,0,0,.5);

    cursor: pointer;

    position:absolute;
    right: -10px;
    top: -10px;

  }
  

 
`;