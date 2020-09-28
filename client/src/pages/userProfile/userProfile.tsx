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
      <h3>{activeUser?.firstName} {activeUser?.lastName}</h3>
      <h3>{activeUser?.age}, {activeUser?.gender}</h3>
        
      </div>
    </>
  );
};

export default Profilepage;