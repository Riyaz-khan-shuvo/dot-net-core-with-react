import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Layout.css"

const Layout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default Layout;