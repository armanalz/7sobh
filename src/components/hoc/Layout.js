import React from 'react';
import Header from '../Header_footer/Header';
import Footer from '../Header_footer/Footer';


const layouts = (props) => {
    return (
        <div className="layout_wrapper">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    );
};

export default layouts;