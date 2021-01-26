import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//import Login from './Pages/Login.jsx'
import Main from './Main.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
const Container = () => {


    return(
        <BrowserRouter> 
        
         
        <div className ='Container'>
            
            <Header/>
            <Nav/>
            <Main/>
            
            <Footer/>
        </div>
        </BrowserRouter>
        
    );
}

export default Container;