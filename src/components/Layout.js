import React from "react";
import Header from './Header';
import Footer from './Footer';
import OurStory from "./OurStory";
// import '../assets/layout.css';


function Layout({children}){
    return(
<> 
<Header/>
{children}
<Footer />
</>
    );
}
export default Layout;