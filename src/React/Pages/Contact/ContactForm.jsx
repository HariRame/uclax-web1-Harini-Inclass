import React from 'react';
import styled from 'styled-components';

/*Scripts-------------------------------*/ 
import {contactFields} from '../../../common/formData.js';

/*Components------------------------------*/ 

import UniversalForm  from '../../Shared/UniversalForm/UniversalForm.jsx'

const ContactForm = () => {

    console.log('Contact fields', contactFields)


    return (
        <ContactFormStyled className='ContactForm'>
            <UniversalForm 
            fields = {contactFields}
            apURL = '/email/send'
            submitText = 'Send Email' />
        </ContactFormStyled>
    );
}

export default ContactForm;

const ContactFormStyled = styled.div`
    
`;