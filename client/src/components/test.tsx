import React, { FunctionComponent } from "react";
import Gallereact from "gallereact";
import {Button,DatePicker} from 'antd'
import "antd/dist/antd.css";

import './test.scss'

interface TestingProps {
  myusers: Object[];
}
function testclick () {
alert('dont click the button YOU WILL WAKE IT')
}

const Testing: FunctionComponent<TestingProps> = ({ myusers }) => {
 

  return (
    <>
      <div>
        <Button type = 'primary' onClick = {testclick}>
        this is a button Testing
        </Button>
      <DatePicker/>
       
      </div>
    </>
  );
};

export default Testing;
