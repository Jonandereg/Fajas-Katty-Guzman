import React, { FunctionComponent, useContext, useState } from 'react';
import { Button, Modal,InputNumber  } from 'antd';
import { UserContext } from '../../App';
import { updateServerUser } from '../../services/apiServices'
import Product from '../../types/product';
import testVid from '../../assets/videos/largoEspalda.mp4'
import User from '../../types/user'
interface ProductProps {  
    product: Product;
  
}
const intialProperty:{[key: string]: number} = {size:0,bustSize:0,counterHips:0,contourMidThigh:0}
const Measurements: FunctionComponent<ProductProps> = (props) => {
  const { activeUser } = useContext(UserContext);
  const [visible, setVisible] = useState(false); 
  const [videoSource,setVideoSource]= useState(testVid)
  const [updateUser,setUpdateUser] = useState(activeUser)
  const [userMes,setUserMes] = useState(intialProperty)
  


  function showModal() {
    setVisible(true);
  }
function handleSubmit (oldUser: User ) {
  const newUserData: User = {...oldUser}
  newUserData.measurements ? newUserData.measurements = [...newUserData.measurements, userMes] : newUserData.measurements = [userMes];  
  setUpdateUser(newUserData);
  setVisible(false);
  console.log(newUserData.measurements)
  updateServerUser(newUserData);
}
  function handleOk() {
    setVisible(false);
  }

  function handleCancel() {
    setUserMes(intialProperty);
    setVisible(false);
  }

  // measurementes [] --> measurements [{bustsize:50,contourHip:45,head:90}]

  function handleChange({target}:any){   
   const newMeasure = {...userMes};
   newMeasure[target.name] = target.value;
   setUserMes(newMeasure); 
  
  }
  function renderVideo(measurement:string) {
   setVideoSource(props.product.videos [measurement])
  }
 

  function loggedUser() {
    function renderMeasurements() {
    
      return props.product.localMeasurements.map(function(measurement:string){       
        return (<p>{measurement.split('_').join(' ')}<input  type ={'number'} min={0} max={1000}  onChange={handleChange} onFocus={()=>renderVideo(measurement)} name={measurement.split('_').join('')} value={userMes[measurement]}/></p>)
       })
       
    }
    if (activeUser && activeUser.email === '') {
      return (
        <>   
        <Button type="primary" onClick={showModal}>
        take your Measurements
      </Button>
          <Modal
            visible={visible}
            title='User Not Logged in'
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Return
              </Button>,
              <Button key='submit' type='primary' onClick={handleOk}>
                Submit
              </Button>,
            ]}
          >
            <p>Please Log in so we can save your Measurements</p>          
          </Modal>
        </>
      );
    } else {
      return (
        <>
         <Button type="primary" onClick={showModal}>
        take your Measurements
        </Button>
          <Modal
            visible={visible}
            title='Your Custom Measure Here'
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key='back' onClick={handleCancel}>
                Return
              </Button>,
              <Button key='submit' type='primary' onClick={()=>handleSubmit(updateUser)}>
                Submit
              </Button>,
            ]}
          >
            <video src={videoSource} controls={true} muted={true} loop={true} style={{ width: '25vw', height: '60vh' }}></video>            
            <div>{renderMeasurements()}</div>
          </Modal>
        </>
      );
    }
  }

  return (
    <>     
      {loggedUser()}
    </>
  );
};

export default Measurements;
