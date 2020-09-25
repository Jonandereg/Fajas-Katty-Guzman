import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Gallereact from "gallereact";

const Homepage:FunctionComponent = (props) => {

   const images = [
     '../../assets/pictures/jpg-11.jpg'

   ]


    return (
        <>
        <Navbar/>
        <div className="Home_Content">
         <div className="Content_Imgs1"> 
          <Gallereact images={images}/>
         </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default Homepage