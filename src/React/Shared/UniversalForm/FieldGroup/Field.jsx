import React from 'react';
import styled from 'styled-components';

    import Input from './Fields/Input.jsx';
    import Textarea from './Fields/Textarea.jsx';

const Field = ({theField, handleFieldUpdate}) => {
   let FieldComponent;

   switch (theField.type) {
        case 'textarea':
            FieldComponent = Textarea;
            break;
        default:
            FieldComponent = Input;
            break;    
    
   }

   const handleOnChange = (e) => {
        console.log('Handle on change', theField.value);
        theField.value = e.target.value;
        handleFieldUpdate(theField);
   }

    return (
        <FieldStyled className='Field'>
            <FieldComponent 
            theField = {theField}
            onChange = {handleOnChange} />
        </FieldStyled>
    );
}

export default Field;

const FieldStyled = styled.div`
    
`;