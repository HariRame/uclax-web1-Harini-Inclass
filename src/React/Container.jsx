import React from 'react';
import SunAndMoon from './SunAndMoon.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
const Container = () => {


    return(
        <div className ='Container'>
            content
            
            <Header/>
            <Nav/>
            <SunAndMoon/>
            <Footer/>
        </div>
        
    );
}

export default Container;