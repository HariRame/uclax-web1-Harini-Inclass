import React, {useState} from 'react'

import FilterNav from './FilterNav/FilterNav'
import Gallery from './Gallery/Gallery'

import {services} from './servicesData.js'

const Services = () => {
    
    const [catChosen, catChosenUpdate] = useState('Ammenities');
    console.log('catChosen', catChosen);
    return(
        <div>
            <h1>Services</h1>
            <FilterNav services ={ services }  catChosen = {catChosen}/>
            <Gallery services = { services } catChosen = {catChosen} />
        </div>
    );
}

export default Services;