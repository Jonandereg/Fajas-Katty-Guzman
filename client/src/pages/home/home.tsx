import React, { FunctionComponent } from 'react';
import Footer from '../../components/footer/footer'
import Navbar from '../../components/navbar/navbar'
import Gallereact from "gallereact";
import './home.scss'

const Homepage:FunctionComponent = (props) => {

   const images = [
     'https://mail.google.com/mail/u/0?ui=2&ik=eced46fa8b&attid=0.3&permmsgid=msg-f:1678713551839187490&th=174bfd14c9025222&view=att&disp=inline&realattid=f_kffvbecb0',
     'https://mail.google.com/mail/u/0?ui=2&ik=eced46fa8b&attid=0.5&permmsgid=msg-f:1678713551839187490&th=174bfd14c9025222&view=att&disp=safe&realattid=f_kffvbecq1'

   ]


    return (
        <>
        <Navbar/>
        <div className="Home_Content">
         <div className="Content_Imgs1"style={{ width: '40vw', height: '60vh' }}> 
          <Gallereact images={images}/>
         </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default Homepage