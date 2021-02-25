import React, {useState} from 'react'

import FilterNav from './FilterNav/FilterNav'
import Gallery from './Gallery/Gallery'

import {services} from './servicesData.js'

const Services = () => {
    
    const [catChosen, catChosenUpdate] = useState('All');
    console.log('catChosen', catChosen);
    return(
        <div>
            <h1>Services</h1>
            <FilterNav services ={ services }  
            catChosen = {catChosen}
            catChosenUpdate = { catChosenUpdate}
            />
            <Gallery services = { services } 
            catChosen = {catChosen} 
            
            />
        </div>
    );
}

export default Services;