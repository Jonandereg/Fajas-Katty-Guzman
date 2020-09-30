import React, { FunctionComponent } from 'react';
import Navbar from '../../components/navbar/navbar';
import RegisterForm from '../../components/registerForm/registerForm'
import Footer from '../../components/footer/footer'


const Registerpage: FunctionComponent = (props) => {



  return (
    <>
      <Navbar />
      <div className='Home_Content'>     
        <RegisterForm />
      </div>
     <Footer/>
    </>
  );
};

export default Registerpage;
