import React, { FunctionComponent, useContext, useState } from 'react';
import { Button, Modal,InputNumber  } from 'antd';
import { UserContext } from '../../App';
import Product from '../../types/product';

interface ProductProps {  
    product: Product;
  
}

const Measurements: FunctionComponent<ProductProps> = (props) => {
  const { activeUser } = useContext(UserContext);
  const [visible, setVisible] = useState(false);
  const [measurements,setMeasurements] =useState(props.product.measurements)


  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setVisible(false);
  }

  function handleCancel() {
    setVisible(false);
  }

  function onChange(){

  }
  function renderVideo() {

  }
  function renderMeasurements() {
    
    measurements.forEach(function(measurement){       
      return (<p>1`${measurement}`<InputNumber min={0} max={10} step={0.1} onChange={onChange} /></p>)
     })
  }

  function loggedUser() {
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
            title='Title'
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
            <video src="https://static.sonofatailor.com/videos/size_creator/body_measurements/chest.mp4" controls={true} muted={true} loop={true}></video>
            <p>HEAD SIZE <InputNumber min={0} max={10} step={0.1} onChange={onChange} onClick={renderVideo} name={'test'}/></p>
            {renderMeasurements()}
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
