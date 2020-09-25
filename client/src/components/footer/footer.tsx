import React, { FunctionComponent } from 'react';
import { PhoneOutlined, EnvironmentOutlined,FacebookOutlined } from '@ant-design/icons'
import './footer.scss'

const Footer:FunctionComponent = () => {

return (
    <>
    <div className="container">
        <h3><PhoneOutlined /> Call us at 6969HOT!</h3>
        <h3><EnvironmentOutlined /> We are EVERYWHERE</h3>
        <h3><FacebookOutlined /> WAITING FOR JAUME,STEP IT UP BRO</h3>
    </div>
    </>
)

}


export default Footer