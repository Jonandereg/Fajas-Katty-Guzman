import React, { FunctionComponent } from 'react';
import Navbar from '../../components/navbar/navbar';
import RegisterForm from '../../components/registerForm/registerForm'



const Registerpage: FunctionComponent = (props) => {



  return (
    <>
      <Navbar />
      <div className='Home_Content'>
        <h1>REGISTER RIGHT HERE MF</h1>
        <h2>text</h2>
        <h3>lorem ipsum</h3>
        <RegisterForm/>
      </div>
    </>
  );
};

export default Registerpage;
