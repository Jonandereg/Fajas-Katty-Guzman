import React, { FunctionComponent,useContext } from 'react';
import Navbar from '../../components/navbar/navbar';
import { UserContext } from '../../App'




const Profilepage: FunctionComponent = (props) => {
  const { activeUser } = useContext(UserContext);


  return (
    <>
      <Navbar />
      <div className='User_Content'>
        <h1>REGISTER RIGHT HERE MF</h1>
        <h2>text</h2>
        <h3>lorem ipsum</h3>
        
      </div>
    </>
  );
};

export default Profilepage;