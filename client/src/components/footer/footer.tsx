import React, { FunctionComponent } from 'react';
import { PhoneOutlined, EnvironmentOutlined,FacebookOutlined } from '@ant-design/icons'
import './footer.scss'

const Footer:FunctionComponent = () => {

return (
  <>
    <div className='container'>
      <h4>
        <PhoneOutlined /> Call us at 6969HOT!
      </h4>
      <h4>
        <EnvironmentOutlined /> We are EVERYWHERE
      </h4>
      <h4>
        <FacebookOutlined /> WAITING FOR JAUME,STEP IT UP BRO
      </h4>
    
    </div>
  </>
);

}


export default Footer